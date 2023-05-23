import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostFilme from './components/postFilme';
import DeletaFilme from './components/DeletaFilme';

function App() {
  const [filme, setFilmes] = useState([])
 

  const url = `https://cinemaaws.onrender.com/filme`

  const buscaApi = () => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setFilmes(response))
  }



  useEffect(() => {
    buscaApi()

  }, [])

 
  console.log(filme)
  return (
    <>
      <DeletaFilme/>
      <PostFilme />
      <div>{filme.map((data) => {
        return (
          <>
            <div>{data._id}</div>
            <div>{data.nome}</div>
            <div>{data.genero}</div>
            <div>{data.classificacao}</div>
            <div><img width={50} height={100} src={data.link} alt={data.nome} /></div>
          </>
        )
      })}</div>

    </>
  );
}


export default App;
