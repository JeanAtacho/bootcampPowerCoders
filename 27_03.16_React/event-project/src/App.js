import { setState } from 'react'
import './App.css';

function App() {
  const [number, setNumber] = setState(0)

  const incrementar = () => setNumber(number++)

  return (
    <div className="App">
      <p className='number'>{number}</p>
      <buttonn onClick={incrementar}>+</buttonn>
    </div>
  );
}

export default App;
