import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [filme, setFilmes] = useState()

const buscaApi = () => {
  fetch(`https://cinemaaws.onrender.com/filme`)
    .then(res => res.json())
    .then(res => setFilmes(res))
}
  useEffect(() => {
    
  })

  return (
    <>


    </>
  );
}

export default App;
