import React from 'react';
import './App.css';
import Home from './pages/Home/HomePage';
import LandingPage from './pages/LandingPage/LandingPg';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Home />
    </div>
  );
}
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
export default App;
