import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Beers from './components/Beers';

function App() {
  return (
    <Router>
      <div className="">
        <Hero></Hero>
        <Beers id='menu'></Beers>
      </div>
    </Router>
  );
}

export default App;
