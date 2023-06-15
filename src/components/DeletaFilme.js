import axios from "axios";
import React, {useEffect, useState} from "react";
import NavBar from "../Paginas/NavBar";
import SideBar from "./sideBar/SideBar";


function DeleteFilme () {
    const [id, setId] = useState()
        
    const deleta = () => {

        axios.delete(`https://cinemaaws.onrender.com/filme/${id}`)
    }  

     return(
        <>
        <NavBar/>

       <input 
        value={id}
        onChange={(e) =>setId(e.target.value)}
        ></input>

        <button onClick={deleta}>deleta</button>
        
        </>
     )
}

export default DeleteFilme