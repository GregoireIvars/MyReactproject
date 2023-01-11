
import './App.css';
import PersonnageList from './composant/PersonnageList';
import React, { useState } from 'react';

function App() {
  const [personnages, setPersonnages] = useState([]);

  async function requesteHandle() {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const url = ('https://swapi.dev/api/people')
    fetch(url, requestOptions).then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json();
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(data => this.setPersonnages({
      name: data.name,
      height: data.height,
      gender: data.gender,
    }).then(listPersonnage => data.results.map((personnageData)=>{
      return {
        name : personnageData.name,
        height : personnageData.height,
        gender : personnageData.gender,
      }
    })
    ));
  

  }



  return (
    <div className="App">
      <h2>Obtenir tout les personnages de Star Wars</h2>
      <button onClick={requesteHandle}>requeste</button>
    </div>
  );
}

export default App;
