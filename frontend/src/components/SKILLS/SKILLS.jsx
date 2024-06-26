import React, { useEffect } from "react";
import Html_CSS from "../../assets/Html_CSS.png";
import javascript from "../../assets/icons8-javascript.svg";
import REACTJS from "../../assets/react-svgrepo-com.svg";
import UXUI from "../../assets/UiUX.png";
import mern from "../../assets/Web_developer.png";
import Card from "../CardBox/Card";
import aos from "aos";
import "aos/dist/aos.css";
const SKILLS = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="text-white  bg-black" id="Skills">
      <h1
        className="text-center py-16 text-xl font-bold font-serif text-[#22c3e6] uppercase"
        data-aos="zoom-in">
        Technical Skills
      </h1>

      <div className="flex flex-wrap justify-center items-center px-24  gap-11">
        <div data-aos="zoom-in">
          <Card
            title="HTML & CSS"
            text="HTML is the structural language that forms the content of a webpage, while CSS is used for styling and design, enabling the visual presentation of that content."
            img={Html_CSS}
          />
        </div>
        <div data-aos="zoom-in">
          <Card
            title="JAVASCRIPT"
            text="JavaScript is a versatile programming language used for web development, allowing dynamic interactions on websites, from simple animations to complex applications, through its powerful scripting capabilities."
            img={javascript}
          />
        </div>
        <div data-aos="zoom-in">
          <Card
            title="REACT JS"
            text="React.js is a powerful JavaScript library used for building user interfaces, enabling efficient creation of interactive web applications through its component-based architecture."
            img={REACTJS}
          />
        </div>
        <div data-aos="zoom-in">
          <Card
            title="UX & UI"
            text="UX (User Experience) & UI (User Interface) design focus on crafting seamless, intuitive digital experiences by understanding user needs and translating them into visually engaging and functional interfaces."
            img={UXUI}
          />
        </div>
        <div data-aos="zoom-in">
          <Card
            title="MERN STACK"
            text="The MERN stack comprises MongoDB, Express.js, React, and Node.js, offering a robust, full-stack JavaScript framework for building web applications, from the backend to the frontend, with seamless data flow and scalability."
            img={mern}
          />
        </div>
      </div>
    </div>
  );
};

export default SKILLS;
