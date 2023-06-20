import React from "react";

function Body() {
    return(
        <div>
            <body>
                <div className="sideBar">
                    <div className="carrinho"></div>
                    <div className="home"></div>
                    <div className="filmesEmCartaz"></div>
                    <div className="comidasEBebidas"></div>
                    <div className="logout"></div>
                </div>

                <div className="contentFilmes">
                    <div className="banner"></div>
                    <div className="principaisFilmes"></div>
                    <div className="valorFilmeBanner"></div>
                </div>
                
                <div className="combos">
                    <div className="pipocaGrande"></div>
                    <div className="pipoca"></div>
                    <div className="pipocaGrandeRefri"></div>
                    <div className="pipocaRefri"></div>
                </div>
            </body>
        </div>
    )
}

export default Body;