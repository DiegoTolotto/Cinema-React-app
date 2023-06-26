import React, { useState, useEffect } from "react";


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
            <div>{data._id}</div>
            <div className="nome">{data.nome}</div>
            <div className="genero">{data.genero}</div>
            <div className="classificacao">{data.classificacao}</div>
            <div className="descricao">{data.descricao}</div>
            <div className=""><img width={50} height={100} src={data.link} alt={data.nome} /></div>
          </div>
        )
      })}</div>
    </>
  )
}

export default CardFilme;