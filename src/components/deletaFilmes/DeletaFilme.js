import axios from "axios";
import React, { useEffect, useState } from "react";
import "./deletaFilme.css"

function DeleteFilme() {
    const [id, setId] = useState()

    const deleta = () => {

        axios.delete(`https://cinemaaws.onrender.com/filme/${id}`)
    }

    return (
        <div className="deletContent">
            <input
                className="inputDelet"
                value={id}
                onChange={(e) => setId(e.target.value)}
            ></input>

            <button
                className="bntDelet"
                onClick={deleta}>deleta</button>

        </div>
    )
}

export default DeleteFilme