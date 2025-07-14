import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Services />
      <Skills />
    </div>
  );
}

export default App;
