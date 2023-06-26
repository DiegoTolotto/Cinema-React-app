import React, { useState, useEffect } from "react";
import { Card } from 'antd';

const { Meta } = Card;


function CardFilme() {
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
    <>
      <div>{filme.map((data) => {
        return (
          <div>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={data.nome} src={data.link} />}
            >
              <Meta title="Europe Street beat" description={
                <div>
                  <div>{data._id}</div>
                  <div className="nome">{data.nome}</div>
                  <div className="genero">{data.genero}</div>
                  <div className="classificacao">{data.classificacao}</div>
                  <div className="descricao">{data.descricao}</div>
                </div>
              } />
            </Card>
          
          </div>
        )
      })}</div>
    </>
  )
}

export default CardFilme;