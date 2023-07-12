import React, { useState, useEffect } from "react";
import { Card, Modal, Carousel } from 'antd';
import './banner.css'


function BannerFilme() {
  const [filmes, setFilmes] = useState([])
  const [index, setIndex] = useState(0);

  const url = `https://cinemaaws.onrender.com/filme/`

  //Armazena informçãoes da api para o banner
  const buscaApi = () => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setFilmes(response))
  }

  useEffect(() => {
    buscaApi()

  }, [])

  return (

    <div className="bannerContent">
     
      <Carousel className="carouselBanner" autoplay>
        <div>
          <img alt={filmes[0].nome} src={filmes[0].link} className="banner" />
        </div>
        <div>
          <img alt={filmes[1].nome} src={filmes[1].link} className="banner" />
        </div>
        <div>
          <img alt={filmes[2].nome} src={filmes[2].link} className="banner" />
        </div>
        <div>
          <img alt={filmes[3].nome} src={filmes[3].link} className="banner" />
        </div>
      </Carousel>
    </div>
  )
}

export default BannerFilme;












