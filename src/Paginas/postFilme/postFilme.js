import React from "react";
import { useState } from "react";
import axios from "axios";
import { Input, Button } from 'antd';
import "./postFilme.css"

const { TextArea } = Input;

function PostFilme() {
  const [data, setData] = useState([])
  const [classificacao, setClassificacao] = useState("")
  const [descricao, setDescricao] = useState("")
  const [genero, setGenero] = useState("")
  const [link, setlink] = useState("")
  const [nome, setNome] = useState("")
  const [tempoDeDuracao, setTempoDeDuracao] = useState("")
  const [valor, setValor] = useState("")
  const [trailer, setTrailer] = useState("")


  const handleSubmit = () => {

    axios.post(`https://cinemaaws.onrender.com/filme`, {
      classificacao: classificacao,
      descricao: descricao,
      genero: genero,
      link: link,
      trailer: trailer,
      nome: nome,
    })
      .then((res) => res.data)
      .then((res) => setData(res))
      .catch((e) => console.log(e))


  }

  return (

    <div>
      <form className="contentFilm">
        <div>
          <label>Classificação</label>
          <Input
            showCount   
            maxLength={20}
            className="classificacao"
            value={classificacao}
            onChange={(e) => setClassificacao(e.target.value)}
          ></Input><br /><br />
        </div>

        <div>
          <label>Gênero</label>
          <Input
            showCount maxLength={20}
            className="genero"
            id="genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          ></Input><br /><br />
        </div>

        <div>
          <label>Link</label>
          <Input
            showCount maxLength={20}
            className="campo-de-busca"
            id="link"
            value={link}
            onChange={(e) => setlink(e.target.value)}
          ></Input><br /><br />
        </div>

        <div>
          <label>Nome</label>
          <Input
            showCount maxLength={20}
            className="campo-de-busca"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></Input><br /><br />
        </div>

        <div>
          <label>Tempo de duração</label>
          <Input
            showCount maxLength={20}
            className="campo-de-busca"
            id="tempoDeDuracao"
            value={tempoDeDuracao}
            onChange={(e) => setTempoDeDuracao(e.target.value)}
          ></Input><br /><br />
        </div>

        <div>
          <label>Valor</label>
          <Input
            showCount maxLength={20}
            className="campo-de-busca"
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          ></Input><br /><br />
        </div>


        <div>
          <label>Descrição</label>
          <TextArea
            showCount maxLength={100}
            className="campo-de-busca"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></TextArea><br /><br />
        </div>

        <div>
          <label>Trailer</label>
          <TextArea
            showCount maxLength={100}
            className="campo-de-busca"
            id="trailer"
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
          ></TextArea><br /><br />
        </div>

        <Button type="primary" onClick={(e) => {
          e.preventDefault();
          handleSubmit();

        }}>Submit</Button>




      </form>
    </div >

  )

}

export default PostFilme;