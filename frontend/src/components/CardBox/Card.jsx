import React from "react";
import Images from "../../assets/Notes.png";
const Card = ({
  img = Images,
  text = "Experienced Web Developer | Building Seamless Digital Experiences with Front-End & Back-End Expertise",
  title = "Web Developer",
}) => {
  return (
    <div className="relative">
      <div className="absolute bg-black  -top-7 right-[8.5rem]  rounded-full ">
        <img
          src={img}
          alt="img"
          className="w-12 md:w-12 p-2 rounded-full"
          style={{ border: "2px solid #22c3e6" }}
        />
      </div>
      <div
        className=" p-8 rounded flex flex-col gap-4"
        style={{ border: "2px solid #22c3e6" }}>
        <h3 className="text-center text-xl font-bold font-serif text-[#22c3e6]">
          {title}
        </h3>
        <p className="w-60 h-28 text-justify text-sm font-serif">{text}</p>
      </div>
    </div>
  );
};

export default Card;
