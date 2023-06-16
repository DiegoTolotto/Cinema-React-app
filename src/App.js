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
    <div>
      <SideBar/>
      <Content/>
    </div>
  );
}





export default App;
