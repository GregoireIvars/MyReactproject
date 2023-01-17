
import '../Css/App.css';
import Personnage from './Personnage';
import React, { useState, useEffect } from 'react';
import { Create, findAll, Show } from '../Services/Personnage.services';

function RequestPersonnage() {
    const [personnages, setPersonnages] = useState([]);
    async function fetchPersonnagesShowHandler() {
        const listPersonnages = await Show()
        setPersonnages(listPersonnages);
    }
    async function fetchPersonnagesCreateHandler() {
        const listPersonnages = await Create()
        setPersonnages(listPersonnages);
    }
    async function fetchPersonnagesFindAllHandler() {
        const listPersonnages = await findAll()
        setPersonnages(listPersonnages);
    }
    useEffect(() => {
        fetchPersonnagesShowHandler()
    }, [])
  
    return (
      
            <div className="App">
                <header className='App-header'>
                    <h2>Liste des personnages</h2>
                    <button onClick={fetchPersonnagesShowHandler}>Requeste Show</button>
                    <button onClick={fetchPersonnagesCreateHandler}>Requeste Create</button>
                    <button onClick={fetchPersonnagesFindAllHandler}>Requeste findAll</button>
                    <section>
                        {personnages.length > 0 && <Personnage personnages={personnages.name} />}
                        {personnages.length === 0 && <p>Found no movies.</p>}
                    </section>
                </header>
            </div>
       
    );
}

export default RequestPersonnage;
