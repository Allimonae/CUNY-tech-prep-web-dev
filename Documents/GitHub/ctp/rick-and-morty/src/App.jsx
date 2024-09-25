import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. use useState to initialize an empty array of characters
// 2. use useEffect to fetch characters from the API on first render (Get all characters) https://rickandmortyapi.com/documentation/#get-all-characters
// 3. render out a list of characters
// 4. use bootstrap or Tailwind to style the list

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new error('Network response not ok');
        }
        const data = await response.json();
        console.log("hello, i am", data.results);
        setCharacters(data.results);
        
      } catch (e) {
        setError(e.message);
        setCharacters([]);
      }
    };
    fetchData();
  }, []) 

  if (error) {
    return <div className="alert alert-danger" role="alert">Error: {error}</div>;
  }

  if (!characters.length) {
    return <div className="alert alert-info" role="alert">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Rick and Morty Characters:</h1>
      <div className='row'>
        {characters.map((character) => (
          <div key={character.id} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <h5 className="card-title text-center">{character.name}</h5>
              <img src={character.image} alt={character.name} className="card-img-top"></img>
              <div className='card-body'>
                <ul className="list-group list-group-flush">
                  <li className='list-group-item'>Status: {character.status}</li>
                  <li className='list-group-item'>Species: {character.species}</li>
                  <li className='list-group-item'>Gender: {character.gender}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <CharacterList/>
    </div>
  )
}

export default App
