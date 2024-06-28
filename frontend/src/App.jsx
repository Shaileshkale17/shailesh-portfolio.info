import "./App.css";
import Navber from "./components/Navber/navber";
import Hero from "./components/Hero/Hero";
import DO from "./components/Do/DO";
import EXPERIENCE from "./components/EXPERIENCE/EXPERIENCE";
import SKILLS from "./components/SKILLS/SKILLS";
import Project from "./components/Project/Project";
import Cartification from "./components/Cartification/Cartification";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-black h-full w-full ">
      <Navber />
      <Hero />
      <DO />
      <EXPERIENCE />
      <SKILLS />
      <Project />
      <Cartification />
      <Footer />
    </div>
  );
}

export default App;
