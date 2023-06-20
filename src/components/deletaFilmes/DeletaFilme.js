import axios from "axios";
import React, { useEffect, useState } from "react";
import "./deletaFilme.css"
import { Input, Button } from 'antd';

function DeleteFilme() {
    const [id, setId] = useState()

    const deleta = () => {

        axios.delete(`https://cinemaaws.onrender.com/filme/${id}`)
    }

    return (
        <div className="deletContent">
            <Input
            showCount   
            maxLength={20}
            className="inputDelet"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></Input><br /><br />

            <button
                className="bntDelet"
                onClick={deleta}>deleta</button>

        </div>
    )
}

export default DeleteFilme