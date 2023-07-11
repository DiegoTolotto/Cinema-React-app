import React, { useState, useEffect } from "react";
import { Card, Modal, Carousel } from 'antd';
import './banner.css'


function BannerFilme() {
  const [filmes, setFilmes] = useState([])
  const [index, setIndex] = useState(0);

  const url = `https://cinemaaws.onrender.com/filme/`

  const buscaApi = () => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setFilmes(response))
  }

  //função para passar para o slide anterior
  const prevSlide = () => {
    const primeroSlide = index === 0
    const novoIndex = primeroSlide ? filmes.length - 1 : index - 1;
    setIndex(novoIndex);
  }
  //função para passar para o proximo slide
  const nesxtSlide = () => {

  }
  useEffect(() => {
    buscaApi()
    prevSlide()
  }, [])

  return (
    <>
      return (
      <div key={index} className="carouselBanner">
        <Carousel>
          <div>
            <img src={data.link} className="banner" />
          </div>
        </Carousel>

      </div>

    </>
  )
}

export default BannerFilme;












