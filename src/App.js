import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Board from './components/pages/Board'
import Events from './components/pages/Events'
import Committees from './components/pages/Committees'
import AboutUs from './components/pages/AboutUs'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Board' exact element={<Board/>} />
        <Route path='/Events' exact element={<Events/>} />
        <Route path='/Committees' exact element={<Committees/>} />
        <Route path='/AboutUs' exact element={<AboutUs/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
