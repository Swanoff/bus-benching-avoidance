import React, {Component} from 'react';
import ReactStoreIndicator from 'react-score-indicator';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import './nextStep.css';
import Steps, { Step } from 'rc-steps';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStop: 0
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
            <ReactStoreIndicator style={{ position: 'absolute' }}
              value={38}
              maxValue={40}
              stepsColors={['#3da940', '#3da940', '#3da940', '#53b83a', '#84c42b', '#f1bc00', '#ed8d00', '#d12000']}
            />
            <img src={require('./assets/seat.png')} alt='seat' height={100} width={100} style={{ marginTop: 30 }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '4%', marginLeft: '13%' }}>
            <img src={require('./assets/stand.png')} alt='standing' height={135} width={55} />
            <span style={{ fontSize: 25, fontWeight: 'bold', color: 'orange', marginLeft: 3 }}>X <span style={{ fontSize: 35, fontWeight: '500' }}>3</span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
