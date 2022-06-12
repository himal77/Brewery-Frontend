import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="">
        <Hero></Hero>
        <Sidebar></Sidebar>
      </div>
    </Router>
  );
}

export default App;
