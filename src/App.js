import React from 'react';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import Members from './pages/Members';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/members" element={<Members/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
