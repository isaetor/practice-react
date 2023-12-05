import axios from "axios";
import "./assets/css/App.css"
import { useEffect, useState } from "react";

function App(){

  const [users, setUsers] = useState([])

  useEffect(()=>{   

    axios.get("https://randomuser.me/api/").then((res)=>{
      setUsers(res.data.results)
    })
    
  }, [])
  
  const getUsers = ()=>{
    axios.get("https://randomuser.me/api/").then((res)=>{
      setUsers(res.data.results)
    })
  }

  return (
    <div>
      <button onClick={getUsers}>new user</button>
      { 
        users?.map((user) => (
          <div>
            <p>{user.name.first+" "+user.name.last}</p>
            <img src={user.picture.medium} alt={user.name.first}></img>
          </div>
        ))
      }
    </div>
  )
}

export default App;