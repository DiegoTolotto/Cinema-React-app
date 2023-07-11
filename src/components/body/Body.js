import CardFilme from "../cardFilmes/CardFilme";
import DrawerMenu from "../gaveta/Gaveta";
import React from "react";
import "./body.css"
import BannerFilme from "../bannerFilme/BannerFilme";
import Combo from "../cardCombo/Combo";

function Body() {
    return(
        <div>
            <body className="bodyB">
                <CardFilme/>
                <Combo/>
                <CardFilme/>
            </body>
        </div>
    )
}

export default Body;