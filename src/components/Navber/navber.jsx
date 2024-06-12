import React from "react";
import logoshailesh from "../../assets/icons8-connect-develop.svg";
import Home from "../../assets/icons8-home.svg";
import Skills from "../../assets/icons8-tick.svg";
import Project from "../../assets/icons8-project-80.png";
import Blog from "../../assets/icons8-blog.svg";
import Contact from "../../assets/download (3).png";
import closees from "../../assets/icons8-x-48.png";

const Navber = () => {
  return (
    <nav
      className="flex flex-row justify-between h-16 px-8 bg-transparent text-white "
      style={{ "box-shadow": " 0px 0 12px 0px " }}>
      <h1 className="flex items-center gap-2">
        <img className="w-5 h-auto" src={logoshailesh} alt="Shailesh" />
        shailesh
      </h1>
      <ul className="flex flex-row gap-8">
        <li className="flex items-center gap-2">
          <img className="w-5 h-auto" src={Home} alt="home" />
          Home
        </li>
        <li className="flex items-center gap-2">
          <img className="w-5 h-auto" src={Skills} alt="Skills" />
          Skills
        </li>
        <li className="flex items-center gap-2">
          <img className="w-5 h-auto" src={Project} alt="Project" />
          Project
        </li>
        <li className="flex items-center gap-2">
          <img className="w-5 h-auto" src={Blog} alt="Blog" />
          Blog
        </li>
        <li className="flex items-center gap-2">
          <img className="w-5 h-auto" src={Contact} alt="Contact" />
          Contact
        </li>
      </ul>
      <img className="hidden" src={closees} alt="closes" />
    </nav>
  );
};

export default Navber;
