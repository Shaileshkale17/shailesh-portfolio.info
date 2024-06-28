import React, { useEffect } from "react";
import Card from "../CardBox/Card";
import taskimage from "../../assets/icons8-tick.svg";
import uxuiimage from "../../assets/UiUX.png";
import aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
const DO = () => {
  useEffect(() => {
    aos.init({ duration: 1000 }); // Initialize AOS with a more reasonable duration
  }, []);
  return (
    <div className="flex flex-row  justify-center  mt-14 items-center">
      <div className="flex flex-row text-white gap-60 justify-between items-center ">
        <div className="flex flex-col gap-4" data-aos="fade-up-right">
          <h2 className="text-xl font-bold font-serif text-[#22c3e6]">
            What i do....
          </h2>
          <p className="w-96 text-sm font-serif">
            As a web developer handling both frontend and backend, you craft the
            user-facing interface (frontend) while managing the server-side
            logic (backend), ensuring seamless and efficient functionality for
            web applications.
          </p>
        </div>
        <div className="flex flex-row gap-6" data-aos="fade-up-left">
          <Card
            text="Experienced Web Developer | Building Seamless Digital Experiences with Front-End & Back-End Expertise"
            title="Web Developer"
            img={taskimage}
          />
          <Card
            title="UX & UI Developer"
            text="UX (User Experience) & UI (User Interface) design focus on crafting seamless, intuitive digital experiences by understanding user needs and translating them into visually engaging and functional interfaces."
            img={uxuiimage}
          />
        </div>
      </div>
    </div>
  );
};

export default DO;
