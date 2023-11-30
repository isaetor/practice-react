// import logo from './assets/images/logo.svg';
import { useState } from 'react';
import './assets/css/App.css';

function App() {
  const [ count, setCount ] = useState(0)

  const decrease = ()=>{
    setCount(count > 0 ? count-1 : 0)
  }
  
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>increat</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={()=>{setCount(0)}}>set to 0</button>
        <h1>{count}</h1>
    </div>
  )
}


export default App;
