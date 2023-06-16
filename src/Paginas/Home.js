import React, { useState, useEffect } from "react";
import CardFilme from "../components/CardFilme";
import "./home.css"

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
  console.log(filme)
  return (
    <div className="homeB">

      <CardFilme/>
      
    </div>
  )
}

export default Home;