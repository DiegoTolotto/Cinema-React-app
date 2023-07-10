import React, { useState, useEffect, useRef } from "react";
import { Card, Modal } from 'antd';
import "./cardFilme.css"
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Meta } = Card;


function CardFilme() {
  const [filme, setFilmes] = useState([])
  const [open, setOpen] = useState(false);
  const [rs, setrs] = useState({})
  const carousel = useRef(null);

  const url = `https://cinemaaws.onrender.com/filme`

  const buscaApi = () => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setFilmes(response))
  }

  const showDetail = (id) => {

    fetch(`https://cinemaaws.onrender.com/filme/${id}`)
      .then(resposne => resposne.json())
      .then(res => setrs(res))
  }

  useEffect(() => {
    buscaApi()

  }, [])

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <div className="cardFilmes">
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <LeftOutlined />
          </button>

        </div>
        <div className="carousel" ref={carousel}>
          {filme.map((data, index) => {
            return (
              <div
                key={index}
                className="card">

                <div onClick={() => {
                  showDetail(data._id)
                  setOpen(true)
                  }}> 

                 
                  {/* Clicando no card abre o modal */}
                  
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

              </div>
            )
          })}
        </div>


        <Modal
          title={rs.nome}
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={500}
        >
          <p>{rs.descricao}</p>
          <img style={{height: 150}} src={rs.link}/>
        </Modal>
        <div className="buttons">
          <button onClick={handleRightClick}>
            <RightOutlined />
          </button>
        </div>
      </div>
    </>
  )
}

export default CardFilme;