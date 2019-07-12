import React, {Component} from 'react';
import ReactStoreIndicator from 'react-score-indicator';
import { QRCode } from 'react-qr-svg';

import TicketInput from './Components/Ticket/Input/TicketInput';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import './nextStep.css';
import Steps, { Step } from 'rc-steps';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStop: 0,
      totalHeadCount: 0,
      sitting: 0,
      standing: 0,
      totalSeats: 40,
      stops: [
        { key: '0', value: '0', text: 'Stop 1' },
        { key: '1', value: '1', text: 'Stop 2' },
        { key: '2', value: '2', text: 'Stop 3' },
        { key: '3', value: '3', text: 'Stop 4' }
      ]
    }
  }

  render() {
    return (
      <div style={{ margin: '5% 10%' }}>
        <Steps current={this.state.currentStop} labelPlacement='vertical'>
          <Step title='Stop 1' />
          <Step title='Stop 2' />
          <Step title='Stop 3' />
          <Step title='Stop 4' />
        </Steps>

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
            <TicketInput stops={this.state.stops} currentStop={this.state.currentStop} />
          </div>
          <div style={{backgroundImage: `url(${require('./assets/ticket_right.png')})`, backgroundSize: 'cover', width: 166, height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {/* <img src={require('./assets/ticket_right.png')} alt='ticket_right' height={250} /> */}
            <QRCode 
              level='Q'
              style={{width: 125}}
              bgColor='#fe5d21'
              value={JSON.stringify({
                status: 'Not Issued'
              })}
            />
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
}

export default App;
