import React, { useState } from 'react';
import Login from './components/Login';


function App() {
  const adminUser = {
    email: "nomade@nomade.com",
    password: "pruebita1212"
  }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser ({ name: "", email: ""});
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
       <div className="welcome">
          <h2>Welcome <span>{user.name}</span></h2>
          <p className='parraf'>Sistema</p>
          <button onClick={Logout}>Logout</button>
        </div>
         ) : (
        <Login login={login} error={error} />
        )}
    </div>
    
    );
}


  
export default App;
