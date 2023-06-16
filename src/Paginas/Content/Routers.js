import React, { useEffect, useState } from 'react';
import PostFilme from './components/postFilme';
import DeletaFilme from './components/DeletaFilme';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function Content() {
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