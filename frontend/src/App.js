import React, {useState, useEffect} from 'react';
import api from './services/api';
import Header from './components/Header';


import './App.css';

function App() {
    const [Projects, setProjects] = useState([]); 

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);
async function handleAddProject(){
    // setProjects([...Projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post('projects',{
        title:`Novo projeto ${Date.now()}`,
        owner:"Guilherme"
    });
    const project = response.data;


    setProjects([ ...Projects, project]);
}
    return (
        <>  
            <Header title="Projects"/>

            <ul>
                {Projects.map ((Project, index) => <li key = {index}>{Project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;