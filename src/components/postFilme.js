import React from "react";
import { useState } from "react";
import axios from "axios";
import { Input, Button } from 'antd';

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


  const handleSubmit = () => {

    axios.post(`https://cinemaaws.onrender.com/filme`, {
      classificacao: classificacao,
      descricao: descricao,
      genero: genero,
      link: link,
      nome: nome,
    })
      .then((res) => res.data)
      .then((res) => setData(res))
      .catch((e) => console.log(e))


  }

  return (
    <>
      <div>
        <form >
          <label>Classificação</label>
          <div>
            <Input
              showCount maxLength={20}
              className="campo-de-busca"
              id="classificacao"
              value={classificacao}
              onChange={(e) => setClassificacao(e.target.value)}
            ></Input><br /><br />

            <label>Descrição</label>
            <TextArea
              showCount maxLength={100}
              className="campo-de-busca"
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></TextArea><br /><br />

            <label>Genero</label>
            <Input
              showCount maxLength={20}
              className="campo-de-busca"
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

            <label>Nome</label>
            <Input
              showCount maxLength={20}
              className="campo-de-busca"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            ></Input><br /><br />

            <label>Tempo de duração</label>
            <Input
              showCount maxLength={20}
              className="campo-de-busca"
              id="tempoDeDuracao"
              value={tempoDeDuracao}
              onChange={(e) => setTempoDeDuracao(e.target.value)}
            ></Input><br /><br />

            <label>Valor</label>
            <Input
              showCount maxLength={20}
              className="campo-de-busca"
              id="valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            ></Input><br /><br />
          </div>

          <Button type="primary" onClick={(e) => {
            e.preventDefault();
            handleSubmit();

          }}>Submit</Button>




        </form>
      </div >
    </>
  )

}

export default PostFilme;