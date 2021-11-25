import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import HomePage from './pages/home-page';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
