import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Header from './components/header'
import HomePage from './pages/home-page';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>

        </Routes>
      </div>
    </Router>
  );
}
                                    /*  здесь находится ключ, его нужно засекретить*/     /* сюда можно вписать дату */
fetch("https://api.rawg.io/api/games?key=API_KEY=2019-09-01,2019-09-30&platforms=18,1,7 ")
.then(res => res.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});


export default App;

/* https://api.rawg.io/api/games?key=3f4d860d7db145f499bdc1db2553245b */