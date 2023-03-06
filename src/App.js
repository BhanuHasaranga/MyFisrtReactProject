import React from 'react';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
