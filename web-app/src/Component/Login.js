import React, { useState } from 'react';
import '../App.css';
import User from './User'
function Login() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleChange = (event) => {
    setName(event.target.value);
  }
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleSubmit = (event) => {
    <User/>
    event.preventDefault();
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(event) => { handleSubmit(event) }}>
          <h2>  </h2>
          <h3> Sign-up Form </h3>
          <label >
            Name:
          </label><br />
          <input type="text" value={name} required onChange={(event) => { handleChange(event) }} />
          <label ><br />
            Age:
          </label><br />
          <input type="text" value={age} required onChange={(event) => { handleAgeChange(event) }} /><br />
          <label><br />
            Email:
          </label><br />
          <input type="email" value={email} required onChange={(event) => { handleEmailChange(event) }} /><br />
          <label><br />
            Password:
          </label><br />
          <input type="password" value={password} required onChange={(event) => { handlePasswordChange(event) }} /><br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default Login