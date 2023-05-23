import axios from "axios";
import React, {useEffect, useState} from "react";


function DeleteFilme () {
    const [id, setId] = useState()
        
    const deleta = () => {

        axios.delete(`https://cinemaaws.onrender.com/filme/${id}`)
    }  

     return(
        <>
       <textarea 
        value={id}
        onChange={(e) =>setId(e.target.value)}
        ></textarea>

        <button onClick={deleta}>deleta</button>
        
        </>
     )
}

export default DeleteFilme