import React, { useState, useEffect } from "react";
import CardFilme from "../components/cardFilmes/CardFilme";
import "./home.css"
import  Header  from "../components/header/Cabecalho";

function Home() {
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

  return (
    <div className="homeB">
      <Header />
      <CardFilme/>
      
    </div>
  )
}

export default Home;