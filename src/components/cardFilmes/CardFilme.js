import React, { useState, useEffect, useRef } from "react";
import { Card, Modal } from 'antd';
import "./cardFilme.css"
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Meta } = Card;


function CardFilme() {
  const [filme, setFilmes] = useState([])
  const [open, setOpen] = useState(false);
  const carousel = useRef(null);

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

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  console.log(filme)
  return (
    <>
      <div className="cardFilmes">
      <div className="buttons">
          <button onClick={handleLeftClick}>
            <LeftOutlined />
          </button>

        </div>
        <div className="carousel" ref={carousel}>
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
          })}
        </div>
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