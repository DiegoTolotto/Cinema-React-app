import React from "react";
import logo from "../imgs/logo.png"
import { Input } from "antd";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import "./cabecalho.css"
const { Search } = Input;

function Header() {
    const onSearch = (value) => console.log(value);
    return (
        <div>
            <header className="contentHeader">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="procuraFilme">
                    <Search
                        className="inputSearch"
                        placeholder="input search text"
                        onSearch={onSearch}
                        enterButton />
                </div>
                <div className="buttonLog">

                    <div className="login">
                        <LoginOutlined/>
                    </div>
                    <div className="logout">
                        <LogoutOutlined />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;