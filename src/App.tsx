import '@twa-dev/sdk';
import './App.css';
import {TonConnectButton} from '@tonconnect/ui-react';
import {useTonConnect} from './hooks/useTonConnect';
import {useCounterContract} from './hooks/useCounterContract';

function App() {
  const {connected} = useTonConnect();
  const {value, address, sendIncrement} = useCounterContract();

  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton style={{margin: 'auto'}}/>

        <div className='Card'>
          <b>Counter Address</b>
          <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{value ?? 'Loading...'}</div>
        </div>

        <button
          className={`Button ${connected ? 'Active' : 'Disabled'}`}
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App
