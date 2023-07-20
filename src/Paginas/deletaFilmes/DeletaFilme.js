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
            <label className="labelDelet">Adicione o ID do filme para deleta-lo</label>
            <Input
            showCount   
            maxLength={30}
            className="inputDelet"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></Input><br /><br />

            <Button type="primary"
                className="bntDelet"
                onClick={deleta}>Deletar filme</Button>

        </div>
    )
}

export default DeleteFilme