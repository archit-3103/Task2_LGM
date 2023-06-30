import React, {useState} from 'react';
import './App.css';


const App = ()=> {
  const [users, setUsers] = useState([]);

  const loadusers = async ()=> {
    const response = await fetch ("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
  };

  return (
    <div className="App">
      <h1> Hello All</h1>
      <button className="btn" onClick= {loadusers}> Get Data</button>
      <h2> Users:</h2>
      <ul>
         {users.map (({id, login, avatar_url }) => ( 
            <li key ={id}> 
              Name: {login},
              <br></br>
              Avator: {avatar_url} 
            </li>
           ))}
      </ul>
    </div>
  );
};

export default App;
