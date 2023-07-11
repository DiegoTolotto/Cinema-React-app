import React from "react";
import pipocaRefri from '../imgs/pipocarefri.png'
import pipoca from '../imgs/pipoca.png'
import "./combo.css"

function Combo () {
    return(
        <div>
            <img className="pipocaRefri" src={pipocaRefri}/>
            <img className="pipoca" src={pipoca}/>
        </div>
    )
}
export default Combo;