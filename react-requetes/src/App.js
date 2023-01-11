
import './App.css';
import PersonnageList from './composant/PersonnageList';
import React, { useState, useEffect} from 'react';
import {Create, findAll } from './services/Personnage.service';

function App() {
  const [personnages, setPersonnages] = useState([]);
  async function fetchPersonnagesHandler() {
    const listPersonnages = await findAll()
    setPersonnages(listPersonnages);
  }
  useEffect(()=> {
    fetchPersonnagesHandler()
  }, [])
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
