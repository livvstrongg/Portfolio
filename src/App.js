import Navbar from "./components/Nav/Navbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import References from "./components/References/References";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import { useState} from "react";
import './app.scss';


function App() {
  const [menuOpen, setMenuOpen ] = useState(true)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Projects />
        <References />
        <Contact />
      </div>
    </div>
  );
}

export default App;
