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
console.log(filmes)


  useEffect(() => {
    buscaApi()

  }, [])
  console.log(filmes)
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












