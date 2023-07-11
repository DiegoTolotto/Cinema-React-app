import React, { useState, useEffect } from "react";
import { Card, Modal, Carousel } from 'antd';
import './banner.css'


function BannerFilme() {
  const [filmes, setFilmes] = useState([])
  const [open, setOpen] = useState(false);

  const url = `https://cinemaaws.onrender.com/filme/`

  const buscaApi = () => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setFilmes(response))
  }

  //função para passar para o slide anterior
  const prevSlide = () => {
    const isFirstSlide = filmes[0]

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
      <div className="bannerContent">
        {filmes.map((data, index) => {
        return (
          <div key={index} className="carouselBanner">
            <Carousel>
                <div>
                    <img src={data.link} className="banner"/>
                </div>
            </Carousel>
            
          </div>
        )
      })}</div>
    </>
  )
}

export default BannerFilme;












