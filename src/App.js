import './App.css';

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
          <Route exact path="/" element={HomePage}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
