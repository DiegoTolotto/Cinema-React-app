import React, { useState, useEffect } from "react";
import { Card, Modal } from 'antd';
import "./cardFilme.css"

const { Meta } = Card;


function CardFilme() {
  const [filme, setFilmes] = useState([])
  const [open, setOpen] = useState(false);

  const url = `https://cinemaaws.onrender.com/filme`

  const buscaApi = () => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setFilmes(response))
  }
console.log(filme)


  useEffect(() => {
    buscaApi()

  }, [])
  console.log(filme)
  return (
    <>
      <div className="cardFilmes">
        {filme.map((data) => {
        return (
          <div className="card">
            <div onClick={() => setOpen(true)}>
            <Card
              hoverable
              style={{ width: 90 }}
              cover={<img alt={data.nome} src={data.link} />}
            >
              <Meta className="meta"
                
                description={
                  <div>
                    <div className="nome">{data.nome}</div>
                    <div className="genero">{data.genero}</div>
                    <div className="classificacao">{data.classificacao}</div>
                  </div>
                } />
            </Card>

            </div>
            <Modal
              title={data.nome}
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={500}
            >
              <p>{data.descricao}</p>
              <p>{data.descricao}</p>
              <p>{data.descricao}</p>
            </Modal>
            
          </div>
        )
      })}</div>
    </>
  )
}

export default CardFilme;