import React from "react";
import Images from "../../assets/Notes.png";
const CardJob = ({
  img = Images,
  text = "Experienced Web Developer | Building Seamless Digital Experiences with Front-End & Back-End Expertise",
  Company = "Company ",
  location = "location ",
  title = "Web Developer",
  DurationStart = "DurationStart",
  DurationEnd = "Current",
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
        className=" p-8 h-[23.5rem] rounded flex flex-col gap-4"
        style={{ border: "2px solid #22c3e6" }}>
        <h3 className="text-center text-xl font-bold font-serif text-[#22c3e6]">
          {title}
        </h3>
        <p className="w-72 text-start text-sm font-serif">
          Company : {Company}
        </p>
        <p className="w-72 text-start text-sm font-serif ">
          Duration : {DurationStart} -{" "}
          <span
            className={
              DurationEnd === "Current" ? "text-[#22c3e6] animate-beep" : ""
            }>
            {DurationEnd}
          </span>
        </p>
        <p className="w-72 text-start text-sm font-serif">
          Location : {location}
        </p>
        <p className="w-72 h-auto text-justify text-sm font-serif">{text}</p>
      </div>
    </div>
  );
};

export default CardJob;
