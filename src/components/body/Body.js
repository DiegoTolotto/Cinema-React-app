import CardFilme from "../cardFilmes/CardFilme";
import DrawerMenu from "../gaveta/Gaveta";
import React from "react";
import "./body.css"

function Body() {
    return(
        <div>
            <body className="bodyB">
                <DrawerMenu/>
                <CardFilme/>
            </body>
        </div>
    )
}

export default Body;