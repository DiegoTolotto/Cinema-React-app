import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [filme, setFilmes] = useState([])

  const buscaApi = () => {
    fetch(`https://cinemaaws.onrender.com/filme`)
      .then((res) => res.json())
      .then((response) => setFilmes(response))
  }

  useEffect(() => {
    buscaApi()
  }, [])

console.log(filme)
  return (
    <>
      <div>{filme.map((data) => {
        return(
          <>
            <div>{data.nome}</div>
            <div>{data.genero}</div>
            <div>{data.classificacao}</div>
          </>
        )
      })}</div>

    </>
  );
}

export default App;
