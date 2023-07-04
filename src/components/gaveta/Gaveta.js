import React, { useState } from "react";
import { Button, Drawer } from 'antd';
import CardFilme from "../cardFilmes/CardFilme";

function Gaveta() {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
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
            </Drawer>
        </div>
    )
}

export default Gaveta;