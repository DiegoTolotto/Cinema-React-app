import React, { useState, useEffect } from "react";
import { Card, Modal, Carousel } from 'antd';


const { Meta } = Card;


function BannerFilme() {
  const [filmes, setFilmes] = useState([])
  const [open, setOpen] = useState(false);

  const url = `https://cinemaaws.onrender.com/filme/646b8566c3195b2ec23c86f3`

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
      <div className="cardFilmes">
        {filmes.filter((data) => {
        return (
          <div className="carousel">
            <Carousel>
                <div>
                    <img src={data.link}/>
                </div>
            </Carousel>
            
          </div>
        )
      })}</div>
    </>
  )
}

export default BannerFilme;












