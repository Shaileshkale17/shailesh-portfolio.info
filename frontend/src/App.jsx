import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navber from "./components/Navber/navber";
import Hero from "./components/Hero/Hero";
import DO from "./components/Do/DO";
import EXPERIENCE from "./components/EXPERIENCE/EXPERIENCE";
import SKILLS from "./components/SKILLS/SKILLS";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black h-full w-full  relative ">
      <Navber />
      <Hero />
      <DO />
      <EXPERIENCE />
      <SKILLS />
    </div>
  );
}

export default App;
