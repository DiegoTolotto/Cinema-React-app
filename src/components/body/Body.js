import CardFilme from "../cardFilmes/CardFilme";
import DrawerMenu from "../gaveta/Gaveta";
import React from "react";
import "./body.css"
import BannerFilme from "../bannerFilme/BannerFilme";

function Body() {
    return(
        <div>
            <body className="bodyB">
                <CardFilme/>
                <CardFilme/>
            </body>
        </div>
    )
}

export default Body;