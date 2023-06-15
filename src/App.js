import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostFilme from './components/postFilme';
import DeletaFilme from './components/DeletaFilme';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import Home from './Paginas/Home';
import NavBar from './Paginas/NavBar';
import { Navbar } from 'react-bootstrap';
import SideBar from './components/sideBar/SideBar';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<div><Home/></div>}/>
        <Route path="/filmes" element={<PostFilme />}/>
        <Route path="/deletafilmes" element={<DeletaFilme/>}/>      
      </Routes>
    </Router>

    </>
  );
}


export default App;
