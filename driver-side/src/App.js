import React from 'react';
import ReactStoreIndicator from 'react-score-indicator';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ReactStoreIndicator style={{ position: 'absolute' }}
        value={38}
        maxValue={40}
        stepsColors={['#3da940', '#3da940', '#3da940', '#53b83a', '#84c42b', '#f1bc00', '#ed8d00', '#d12000']}
    />
      <img src={require('./assets/seat.png')} alt='seat' height={100} width={100} style={{marginTop: 30}} />
    </div>
  );
}

export default App;
