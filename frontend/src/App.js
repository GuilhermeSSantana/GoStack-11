import React, {useState} from 'react';
import Header from './components/Header';

import backgroundImage from './assets/background.jpg';
import './App.css';

function App() {
    const [Projects, setProjects] = useState(['Desenvolvimento de app','Front-End Web']); 

function handleAddProject(){
    //Projects.push(`Novo projeto ${Date.now()}`)
    setProjects([...Projects, `Novo projeto ${Date.now()}`]);
}
    return (
        <>  
            <Header title="Projects"/>

            <img src={backgroundImage}></img>
            <ul>
                {Projects.map(Project => <li key = {Project}>{Project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;