import React from "react";
import logo from "../imgs/logo.png"
import { Input } from "antd";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
const { Search } = Input;

function Header() {
    const onSearch = (value) => console.log(value);
    return (
        <div>
            <header>
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
                <div className="login">
                    <LoginOutlined />
                    <LogoutOutlined />
                </div>
            </header>
        </div>
    )
}

export default Header;