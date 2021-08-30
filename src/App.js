import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

import Home from './pages/home'


function App() {
  return (
    <Router>
      <div className='app'>
        <Home />
      </div>
    </Router>
  );
}

export default App;

