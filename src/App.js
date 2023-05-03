import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [filme, setFilmes] = useState()

const buscaApi = () => {
  fetch(`https://cinemaaws.onrender.com/filme`)
    .then((res) => res.json())
    .then((response) => setFilmes(response))
    .catch((e) => {
      console.log(e)
    })
}
console.log(filme[0])
  useEffect(() => {
    buscaApi()
  }, [])

  return (
    <>
      <div>{filme.map((data) => {
        return(
          <div>
            <div>{data.nome}</div>
          </div>
        )
      })}</div>

    </>
  );
}

export default App;
