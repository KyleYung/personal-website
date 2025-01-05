import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
