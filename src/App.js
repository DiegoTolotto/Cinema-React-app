import './App.css';

import React, { useEffect, useState } from 'react';
import SideBar from './components/sideBar/SideBar';
import NavBar from './components/navBar/NavBar';


function App() {
  return (
    <div className='app'>
      <NavBar />
      <SideBar/>
    </div>
  );
}





export default App;
