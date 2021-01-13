import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';

function App() {

  const [count, setCount] = useState(0)
  const maxValue = 5
  const increase = () => setCount(count + 1)
  const reset = () => setCount(0)


  return (
      <div className='App'>
        <Counter increase={increase}
                 count={count}
                 reset={reset}
                 maxValue={maxValue}
       />
      </div>
  )
}

export default App;
