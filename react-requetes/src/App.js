
import './App.css';
import PersonnageList from './composant/PersonnageList';
import Personnage from './composant/Personnage';
import React, { useState, useEffect} from 'react';
import {Create, findAll, Show } from './services/Personnage.service';

function App() {
  const [personnages, setPersonnages] = useState([]);


  async function fetchPersonnagesHandler() {
    const listPersonnages = await Show()
    setPersonnages(listPersonnages);
  }
  useEffect(()=> {
    fetchPersonnagesHandler()
  }, [])
  return (
    <React.Fragment>
    <div className="App">
      <h2>Liste des personnages</h2>
      <button onClick={fetchPersonnagesHandler}>requeste</button>
    </div>
    <section>
        {personnages.length > 0 && <Personnage personnages={personnages.name} />}
        {personnages.length === 0 && <p>Found no movies.</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
