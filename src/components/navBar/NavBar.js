import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import logo from "../imgs/logo.png"
import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;


const onSearch = (value) => console.log(value);
function NavBar() {
    return (
        <>
            <header >
                <ul className="nav">

                    <img
                        className="logo"
                        src={logo} />
                    <Search
                    className="inputSearch"
                        placeholder="input search text"
                        onSearch={onSearch}
                        enterButton />
                </ul>
            </header>

        </>
    )
}

export default NavBar;
