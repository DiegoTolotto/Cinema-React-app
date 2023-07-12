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
  const nextSlide = () => {
    const ultimoSlide = index === filmes.length - 1;
    const novoIndex = ultimoSlide ? 0 : index + 1;
    setIndex(novoIndex)
  }

  console.log(index)
  useEffect(() => {
    buscaApi()

  }, [])

  return (

    <div className="bannerContent">
{/* 
      <div>
        <img src={filmes[index]} className="banner" />
      </div>

      <div>
        <div onClick={prevSlide}>
          prev
        </div>

      </div>
      <div>
        <div onClick={nextSlide}>
          next
        </div>

      </div> */}
      <Carousel autoplay>
        <div>
          <img src={filmes[0].link} className="banner" />
        </div>
        <div>
          <img src={filmes[1].link} className="banner" />
        </div>
                <div>
          <img src={filmes[2].link} className="banner" />
        </div>
        <div>
          <img src={filmes[3].link} className="banner" />
        </div>
      </Carousel>
    </div>
  )
}

export default BannerFilme;












