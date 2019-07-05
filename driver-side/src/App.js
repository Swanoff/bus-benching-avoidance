import React from 'react';
import ReactStoreIndicator from 'react-score-indicator';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import Steps, { Step } from 'rc-steps';

function App() {
  return (
    <div style={{margin: '5% 10%'}}>
      <Steps current={1} labelPlacement='vertical'>
        <Step title='Stop 1' />
        <Step title='Stop 2' />
        <Step title='Stop 3' />
        <Step title='Stop 4' />
      </Steps>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4%' }}>
        <ReactStoreIndicator style={{ position: 'absolute' }}
          value={38}
          maxValue={40}
          stepsColors={['#3da940', '#3da940', '#3da940', '#53b83a', '#84c42b', '#f1bc00', '#ed8d00', '#d12000']}
        />
        <img src={require('./assets/seat.png')} alt='seat' height={100} width={100} style={{marginTop: 30}} />
      </div>
    </div>
  );
}

export default App;
