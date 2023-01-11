
import './App.css';
import PersonnageList from './composant/PersonnageList';
import React, { useState } from 'react';

function App() {
  const [personnages, setPersonnages] = useState([]);
  async function fetchPersonnagesHandler() {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    const listPersonnages = data.results.map((personnageData) => {
      return {
        name: personnageData.name,
        gender: personnageData.gender,
        height: personnageData.height,
      };
    });
    setPersonnages(listPersonnages);
  }
  return (
    <React.Fragment>
    <div className="App">
      <h2>Obtenir tout les personnages de Star Wars</h2>
      <button onClick={fetchPersonnagesHandler}>requeste</button>
    </div>
    <section>
        {personnages.length > 0 && <PersonnageList personnages={personnages} />}
        {personnages.length === 0 && <p>Found no movies.</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
