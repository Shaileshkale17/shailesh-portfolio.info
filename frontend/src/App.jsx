import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navber from "./components/Navber/navber";
import Hero from "./components/Hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black h-screen w-screen relative">
      <Navber />
      <Hero />
    </div>
  );
}

export default App;
