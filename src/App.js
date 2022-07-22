import Navbar from "./components/Nav/Navbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import References from "./components/References/References";
import Contact from "./components/Contact/Contact";
import { useState} from "react";
import './app.scss';


function App() {
  const [menuOpen, setMenuOpen ] = useState(true)
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Projects />
        <Portfolio />
        <References />
        <Contact />
      </div>
    </div>
  );
}

export default App;
