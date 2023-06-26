import React, { useState, useEffect } from "react";
import CardFilme from "../components/cardFilmes/CardFilme";
import "./home.css"
import { Carousel } from "antd";
import Header from "../components/header/Cabecalho";


  const contentStyle = {
    margin: 0,
    height: '16px',
    width: '15px',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
  };


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

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="homeB">
      <Header />
      <CardFilme />
    </div>
  )
}

export default Home;