import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"


function NavBar() {
    return (
        <>
            <header >
                <ul className="nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/filmes">Adicionar filme</Link>
                    </li>

                    <li>
                        <Link to="/deletafilmes">Remover filme</Link>
                    </li>
                </ul>
            </header>
              
        </>
    )
}

export default NavBar;
