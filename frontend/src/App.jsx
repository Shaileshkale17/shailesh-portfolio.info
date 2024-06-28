import "./App.css";
import Navber from "./components/Navber/navber";
import Hero from "./components/Hero/Hero";
import DO from "./components/Do/DO";
import EXPERIENCE from "./components/EXPERIENCE/EXPERIENCE";
import SKILLS from "./components/SKILLS/SKILLS";
import Project from "./components/Project/Project";
import Cartification from "./components/Cartification/Cartification";
import Footer from "./components/Footer/Footer";
import ContactFrom from "./components/ContactForm/ContactFrom";
import aos from "aos";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="bg-black h-full w-full ">
      <Navber />
      <Hero />
      <DO />
      <EXPERIENCE />
      <SKILLS />
      <Project />
      <Cartification />
      <ContactFrom />
      <Footer />
    </div>
  );
}

export default App;
