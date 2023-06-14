import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import PostFilme from "../components/postFilme";
import CardFilme from "../components/CardFilme";
import SideBar from "../components/sideBar/SideBar";

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
  return (
    <>
      <NavBar/>
      <SideBar/>
      <CardFilme/>
      
    </>
  )
}

export default Home;