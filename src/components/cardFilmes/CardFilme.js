import React, { useState, useEffect } from "react";
import { Card, Button, Modal } from 'antd';
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



  useEffect(() => {
    buscaApi()

  }, [])
  console.log(filme)
  return (
    <>
      <div>{filme.map((data) => {
        return (
          <div className="card">
            <div onClick={() => setOpen(true)}>
            <Card
              hoverable
              style={{ width: 90 }}
              cover={<img alt={data.nome} src={data.link} />}
            >
              <Meta className="meta"
                title={
                  <div className="nome" style={{ fontSize: 10 }}>{data.nome}</div>
                }
                description={
                  <div>
                    <div className="genero">{data.genero}</div>
                    <div className="classificacao">{data.classificacao}</div>
                  </div>
                } />
            </Card>

            </div>
            <Modal
              title="Modal 1000px width"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={500}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
            
          </div>
        )
      })}</div>
    </>
  )
}

export default CardFilme;