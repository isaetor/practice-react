// import logo from './assets/images/logo.svg';
import './assets/css/App.css';

function App() {
  const name = "saeed"
  return (
    <Job salary={125000} position="Developer" company="google" />
  )
}

const Job = (props)=>{
  return (
    <div>
      <h1>{props.salary}</h1>
      <p>{props.position}</p>
      <span>{props.company}</span>
    </div>
  )
}

export default App;
