import React from "react";

import projecticon from "../../assets/icons8-project-80.png";
const CardImage = ({
  img = projecticon,
  text = "Experienced Web Developer | Building Seamless Digital Experiences with Front-End & Back-End Expertise",
  title = "Web Developer",
  imgproject,
  TECHNICAL,
  projectLink,
}) => {
  return (
    <div className="relative">
      <a href={projectLink}>
        <div className="absolute bg-black  -top-7 right-[45%]  rounded-full ">
          <img
            src={img}
            alt="img"
            className="w-12 md:w-12 p-2 rounded-full"
            style={{ border: "2px solid #22c3e6" }}
          />
        </div>
        <div
          className=" p-7 rounded flex flex-col gap-4"
          style={{ border: "2px solid #22c3e6" }}>
          <img className="w-12 md:w-64 h-40  " src={imgproject} alt={title} />
          <h3 className="text-center text-xl font-bold font-serif text-[#22c3e6]">
            {title}
          </h3>
          <p className="w-72 h-32 text-justify text-sm font-serif">{text}</p>
          <hr className="text-[#22c3e6]" />
          <p className="w-60 h-7 py-3 text-center uppercase text-sm font-serif">
            {TECHNICAL}
          </p>
        </div>
      </a>
    </div>
  );
};

export default CardImage;
