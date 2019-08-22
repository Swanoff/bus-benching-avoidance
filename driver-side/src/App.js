import React, {Component} from 'react';
import ReactStoreIndicator from 'react-score-indicator';
import QRCode from 'qrcode.react';
import Slider from '@material-ui/core/Slider';
import { Icon, Button } from 'semantic-ui-react';
import firebase from '../src/db/firebase';
import TicketInput from './Components/Ticket/Input/TicketInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busName: 96,
      currentStop: 'Gandhipuram',
      selectedDestination: '', // customer's dropping point
      totalHeadCount: 0,
      sitting: 0,
      standing: 0,
      distance: 0,
      totalSeats: 40,
      stops: [
        { key: '0', value: 'Gandhipuram', text: 'Gandhipuram' },
        { key: '1', value: 'Ukkadam', text: 'Ukkadam' },
        { key: '2', value: 'Madhukarai', text: 'Madhukarai' },
        { key: '3', value: 'Ettimadai', text: 'Ettimadai' }
      ], // values for Semantic UI's dropdown
      stop1: 'Gandhipuram',
      stop2: 'Ukkadam',
      stop2_km: 11,
      stop3: 'Madhukarai',
      stop3_km: 19,
      stop4: 'Ettimadai',
      stop4_km: 27,
      issuedTickets: [],
      dropCount: {
        Ukkadam: 0,
        Madhukarai: 0,
        Ettimadai: 0
      }, // to track the free seats at upcoming drop points
      estimatedHeadCout: {
        Ukkadam: 0,
        Madhukarai: 0,
        Ettimadai: 0
      } 
    };
    this.updateLocation = this.updateLocation.bind(this);
    this.setDestination = this.setDestination.bind(this);
  }

  // to track the distance travelled by the bus (by sliding the slider)
  updateLocation = (Null, value) => {
    // conditional update of 'distance' state
    if (value !== this.state.distance) // This condition updates the state only if it is changed even though the point is the slider is clicked so many times
    {
      console.log(value);
      this.setState({
        distance: value,
      });

      // update distance travelled in firebase
      firebase.database().ref().child(`bus/${this.state.busName}`)
        .update({
          distance: this.state.distance
        })
        .then(()=>{console.log('Data is saved')})
        .catch((e)=>{console.log('Failed. ', e)})
    }

    // Changing current stop based on distance using slider
    if (this.state.distance === 0)
      this.setState({
        currentStop: this.state.stop1,
      })
    else if (this.state.distance === this.state.stop2_km)
    {
      if (this.state.dropCount[this.state.stop2] !== 0) // to decrease totalHeadCount after dropping people
      {
        var updatedDropCount = this.state.dropCount;
        var drops = updatedDropCount[this.state.stop2]  // total people dropping at this stop
        updatedDropCount[this.state.stop2] = 0;
        this.setState({
          currentStop: this.state.stop2,
          totalHeadCount: this.state.totalHeadCount - drops,
          dropCount: updatedDropCount
        })
      }
      else // if no one is dropping, then no need to decrease totalHeadCound
      {
        this.setState({
          currentStop: this.state.stop2
        })
      }
    }
    else if (this.state.distance === this.state.stop3_km)
    {
      if (this.state.dropCount[this.state.stop3] !== 0) // to decrease totalHeadCount after dropping people
      {
        updatedDropCount = this.state.dropCount;
        drops = updatedDropCount[this.state.stop3]  // total people dropping at this stop
        updatedDropCount[this.state.stop3] = 0;
        this.setState({
          currentStop: this.state.stop3,
          totalHeadCount: this.state.totalHeadCount - drops,
          dropCount: updatedDropCount
        })
      }
      else // if no one is dropping, then no need to decrease totalHeadCound
      {
        this.setState({
          currentStop: this.state.stop3
        })
      }
    }
    else if (this.state.distance === this.state.stop4_km)
    {
      if (this.state.dropCount[this.state.stop4] !== 0) // to decrease totalHeadCount after dropping people
      {
        updatedDropCount = this.state.dropCount;
        drops = updatedDropCount[this.state.stop4]  // total people dropping at this stop
        updatedDropCount[this.state.stop4] = 0;
        this.setState({
          currentStop: this.state.stop4,
          totalHeadCount: this.state.totalHeadCount - drops,
          dropCount: updatedDropCount
        })
      }
      else // if no one is dropping, then no need to decrease totalHeadCound
      {
        this.setState({
          currentStop: this.state.stop4
        })
      }
    }
  }

  // to track dropping point of customer while issuing each ticket
  setDestination = (event, {value}) => {
    this.setState({
      selectedDestination: value
    })
  }

  render() {
    // Location points on slider
    const markers = [{
        value: 0,
        label: this.state.stop1
      },
      {
        value: 11,
        label: this.state.stop2
      },
      {
        value: 19,
        label: this.state.stop3
      },
      {
        value: 27,
        label: this.state.stop4
      }
    ];

    // Formatting the value which is displayed on slider's pin
    function valuetext(value) {
      return `${value} Km`;
    }

    return (  
      <div style={{display: 'flex'}}>

        {/* Left part */}
        <div style={{width: '60%', paddingTop: '2%'}}>
          <div style={{display: 'flex', margin: '0% 15%', marginBottom: '8%'}}>
            <Icon size='huge' name='bus' color='red' />
            <h1 style={{fontSize: 40, margin: 0}}>96</h1>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', margin: '0% 15%'}}>
            <div style={{width: '100%'}}>
                <Slider
                    defaultValue={0}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    max={27}
                    valueLabelFormat={valuetext}
                    valueLabelDisplay="on"
                    onChange={this.updateLocation}
                    marks={markers}
                />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4%', marginRight: '13%' }}>
              <img src={require('./assets/seat.png')} alt='seat' height={100} style={{ marginTop: 30 }} />
              <ReactStoreIndicator style={{ position: 'absolute' }}
                value={this.state.sitting}
                maxValue={this.state.totalSeats}
                stepsColors={['#3da940', '#3da940', '#3da940', '#53b83a', '#84c42b', '#f1bc00', '#ed8d00', '#d12000']}
                textStyle={{paddingTop: 5}}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '4%', marginLeft: '13%' }}>
              <img src={require('./assets/stand.png')} alt='standing' height={135} style={{marginBottom: 20}} />
              <span style={{ fontSize: 25, fontWeight: 'bold', color: this.getStandingCountColor(), marginLeft: 3 }}>X <span style={{ fontSize: 35, fontWeight: '500' }}>{this.state.standing}</span></span>
            </div>
          </div>

          <div style={{display: 'flex', justifyContent: 'center', marginTop: '4%'}}>
            <div style={{backgroundImage: `url(${require('./assets/ticket_left.png')})`, backgroundSize: 'cover', width: 376, height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '5%', paddingLeft: '1%' }}>
              <TicketInput stops={this.state.stops} currentStop={this.state.currentStop} setDestination={this.setDestination} />
            </div>
            <div style={{backgroundImage: `url(${require('./assets/ticket_right.png')})`, backgroundSize: 'cover', width: 166, height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
              <QRCode 
                level='Q'
                style={{width: 125}}
                bgColor='#fe5d21'
                renderAs='svg'
                value={JSON.stringify({
                  status: 'Not Issued'
                })}
              />
              <Button circular color='red' style={{marginTop: 20}} onClick={()=>this.issueTicket()}>Issue</Button>
            </div>
          </div>
        </div>

        {/* Right part - Issued tickets */}
        <div style={{width: '40%', padding: '5% 2%'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', border: '2px solid black', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: '2% 0%', backgroundColor: 'black'}}>
            <Icon size='big' name='ticket' color='green' style={{paddingTop: 3, paddingRight: '8%'}} />
            <h2 style={{color: 'white', verticalAlign: 'top', margin: 0}}>Issued Tickets</h2>
          </div>
          <div style={{ border: '2px solid black', borderTop: 'none', height: 580, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, overflowY: 'scroll'}}>

          </div>
        </div>
      </div>
    );
  }

  getStandingCountColor() {
    if (this.state.standing >= 0 && this.state.standing <= 3)
      return '#3da940'
    else if (this.state.standing >= 4 && this.state.standing <= 7)
      return '#53b83a'
    else if (this.state.standing >= 8 && this.state.standing <= 11)
      return '#84c42b'
    else if (this.state.standing >= 12 && this.state.standing <= 15)
      return '#f1bc00'
    else if (this.state.standing >= 16 && this.state.standing <= 19)
      return '#ed8d00'
    else
      return '#d12000'
  }

  issueTicket() {
    var updatedDropCount = this.state.dropCount;
    updatedDropCount[this.state.selectedDestination]= updatedDropCount[this.state.selectedDestination]+1;

    this.setState({
      sitting: Math.min(this.state.totalHeadCount+1, this.state.totalSeats),
      standing: Math.max(0, this.state.totalHeadCount+1-this.state.totalSeats),
      totalHeadCount: this.state.totalHeadCount + 1,
      dropCount: updatedDropCount
    })
  }
}

export default App;
