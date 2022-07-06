import Navbar from "./components/Nav/Navbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import References from "./components/References/References";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
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
