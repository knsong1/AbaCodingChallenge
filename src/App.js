import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
