import React, { useEffect } from "react";
import CardJob from "../CardBox/CardJob";
import job from "../../assets/job.png";
import aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
const EXPERIENCE = () => {
  useEffect(() => {
    aos.init({ duration: 1000 }); // Initialize AOS with a more reasonable duration
  }, []);
  return (
    <div className="text-white mt-12 bg-black" id="EXPERIENCE">
      <h1
        className="text-center text-xl font-bold font-serif text-[#22c3e6] uppercase"
        data-aos="fade-in-top">
        Professional Experience
      </h1>
      <div
        className="flex flex-wrap justify-center items-center px-24 mt-12 gap-11"
        data-aos="zoom-in-down">
        <CardJob
          title="Software Developer"
          Company="Hubnex Lab"
          location="Remote"
          text="As a Software Development Engineer (SDE-1) at Hubnex Lab, I am responsible for developing and maintaining high-quality software solutions. I have
          successfully collaborated with cross-functional teams to deliver efficient and scalable code, contributing to key projects that enhance user experience
          and system performance"
          DurationStart="March 2024"
          DurationEnd="Current"
          img={job}
        />
        <CardJob
          title="Software Developer Intern"
          Company=" Techgicus Software Solutions"
          location=" Nagpur Maharashtra"
          text="successfully completed a comprehensive 9-month internship focused on front-end development. Proficiently applied JavaScript and React.js,
          collaborating closely with teams to enhance problem-solving abilities."
          DurationStart="March 2023"
          DurationEnd="December 2023"
          img={job}
        />
      </div>
    </div>
  );
};

export default EXPERIENCE;
