import React, { useEffect, useState } from 'react';
import PostFilme from '../postFilme/postFilme';
import DeletaFilme from '../../components/deletaFilmes/DeletaFilme';
import Home from "../Home"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function Routers() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<div><Home /></div>} />
                <Route path="/filmes" element={<div><PostFilme /></div>} />
                <Route path="/deletafilmes" element={<DeletaFilme />} />
            </Routes>
        </div>
    );

}

export default Routers;