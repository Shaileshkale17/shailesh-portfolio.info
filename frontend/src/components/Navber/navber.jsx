import React, { useState } from "react";
import logoshailesh from "../../assets/icons8-connect-develop.svg";
import Home from "../../assets/icons8-home.svg";
import Skills from "../../assets/icons8-tick.svg";
import Project from "../../assets/icons8-project-80.png";
import Blog from "../../assets/icons8-blog.svg";
import Contact from "../../assets/download (3).png";
import meun from "../../assets/Icons=Menu-w.svg";
import cancel from "../../assets/cancel.svg";
// Correct import

const Navber = () => {
  const [open, setOpen] = useState(false);
  const DataLink = [
    { name: "Home", link: "/", img: Home },
    { name: "Skills", link: "#Skills", img: Skills },
    { name: "Project", link: "#Project", img: Project },
    { name: "Contact", link: "#Contact", img: Contact },
  ];

  return (
    <div
      className="shadow-md w-full static top-1  left-0 z-10 md:py-4 "
      style={{ "box-shadow": "-3px 6px   12px -4px white" }}>
      <div className="md:flex md:items-center md:justify-between md:inset-x-2 lg:px-10 py-2">
        <div className="font-bold font-serif text-xl cursor-pointer flex items-center text-gray-100">
          <span className="text-3xl mr-1 pt-2 flex items-center gap-3">
            <img className="w-4 md:w-8" src={logoshailesh} alt="logo" />
            <p className="text-gray-100  font-serif text-xl">Shailesh</p>
          </span>
        </div>
        <div
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}>
          {open ? (
            <img src={cancel} alt="Close menu" />
          ) : (
            <img src={meun} alt="Open menu" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center text-white  md:pb-0 pb-12 gap-5 items-center ${
            open ? "block h-[21rem] bg-bginputColor px-12" : "hidden h-0"
          }`}>
          {DataLink.map((link) => (
            <li
              key={link.name}
              className="md:inline-block ml-0 lg:ml-[0.5rem] text-xl md:text-base  md:my-0 mb-7 text-gray-100 z-10">
              <div className="flex flex-row gap-2 items-center">
                <img className="w-4 md:w-8" src={link.img} alt={link.name} />
                <a href={link.link}>{link.name}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navber;
