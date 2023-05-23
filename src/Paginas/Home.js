import React, {useState, useEffect} from "react";
import NewHome from "./NewHome";


function Home() {
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
    return(
      <>
      <NewHome/>
      {/* <div>{filme.map((data) => {
        return (
        <div>
        <div>{data._id}</div>
        <div>{data.nome}</div>
        <div>{data.genero}</div>
        <div>{data.classificacao}</div>
        <div>{data.descricao}</div>
        <div>{data.tempoDeDuracao}</div>
        <div>{data.valor}</div>
        <div><img width={50} height={100} src={data.link} alt={data.nome} /></div>
      </div>
    )
  })}</div> */}
  </>
)
}

export default Home;