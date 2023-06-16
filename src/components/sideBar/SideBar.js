import React from "react";
import { Menu } from "antd";
import "./sideBar.css"
import { useNavigate } from "react-router-dom";
import {
    HomeOutlined,
    PlusSquareOutlined,
    MinusSquareOutlined
} from "@ant-design/icons"
import Routers from "../../Paginas/Routers/Routers";


function SideBar() {
    const navigate = useNavigate()
    return (
        <div className="contentSideBar">
            <Menu
            style={{}}
                onClick={({ key }) => {
                    navigate(key)
                }}
                items={[
                    {
                        label: "home",
                        key: "/",
                        icon: <HomeOutlined />
                    },
                    {
                        label: "Adicionar filmes",
                        key: "/filmes",
                        icon: <PlusSquareOutlined />,
                    },
                    {
                        label: "Remover filmes",
                        key: "/deletafilmes",
                        icon: <MinusSquareOutlined />,
                    },
                    { label: "home" },
                ]}></Menu>
            <Routers />
        </div>

    )
}

export default SideBar;