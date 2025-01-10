import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <div className="App-content">
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
