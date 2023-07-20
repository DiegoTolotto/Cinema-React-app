import React, { useState, useEffect } from "react";
import { Card, Modal, Carousel } from 'antd';
import ReactPlayer from "react-player";
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
  console.log(filmes)
  useEffect(() => {
    buscaApi()

  }, [])
  const urlS = ``
  return (

    <div className="bannerContent">

      <Carousel className="carouselBanner" autoplay>
        <div>
          <ReactPlayer 
          playing={true} 
          light="https://uploads.jovemnerd.com.br/wp-content/uploads/2023/04/barbie_template_poster_site__52e29t424.jpg" 
          url={filmes[17].trailer} 
          className="banner" />

        </div>
        <div>
          <img alt={filmes[2]} src={filmes[2]} className="banner" />
        </div>
        <div>
          <img alt={filmes[3]} src={filmes[3]} className="banner" />
        </div>
      </Carousel>
    </div>
  )
}

export default BannerFilme;












