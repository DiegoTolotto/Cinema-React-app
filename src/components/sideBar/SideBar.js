import React from "react";
import {Menu} from "antd";
import "./sideBar.css"
import { useNavigate } from "react-router-dom";


function SideBar() {
    const navigate = useNavigate()
    return(
        <div className="contentSideBar">
            <Menu 
            onClick={({key})=>{
                navigate(key)
            }}
            items={[
                {   label: "home",
                    key: "/",
                    },
                {label: "home"},
                {label: "home"},
                {label: "home"},
            ]}/>
        </div>
    )
}

export default SideBar;