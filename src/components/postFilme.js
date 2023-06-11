import React from "react";
import { useState } from "react";
import axios from "axios";
import NavBar from "../Paginas/NavBar";


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
      <NavBar/>
      <div>
        <form >
          <label>classificação</label>
          <input
            className="campo-de-busca"
            id="classificacao"
            value={classificacao}
            onChange={(e) => setClassificacao(e.target.value)}
          ></input><br /><br />

          <label>descrição</label>
          <input
            className="campo-de-busca"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></input><br /><br />

          <label>Genero</label>
          <input
            className="campo-de-busca"
            id="genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          ></input><br /><br />

          <label>Link</label>
          <input
            className="campo-de-busca"
            id="link"
            value={link}
            onChange={(e) => setlink(e.target.value)}
          ></input><br /><br />

          <label>Nome</label>
          <input
            className="campo-de-busca"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></input><br /><br />

          <label>Tempo de duração</label>
          <input
            className="campo-de-busca"
            id="tempoDeDuracao"
            value={tempoDeDuracao}
            onChange={(e) => setTempoDeDuracao(e.target.value)}
          ></input><br /><br />

          <label>Valor</label>
          <input
            className="campo-de-busca"
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          ></input><br /><br />

          <button onClick={(e) => {
            e.preventDefault();
            handleSubmit();

          }}>Submit</button>




        </form>
      </div >
    </>
  )

}

export default PostFilme;