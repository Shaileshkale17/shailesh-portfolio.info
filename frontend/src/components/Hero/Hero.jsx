import React, { useEffect } from "react";
import profileimg from "../../assets/Avatar-shailesh.jpg";
import github from "../../assets/icons8-github.svg";
import linkedin from "../../assets/icons8-linkedin.svg";
import twitter from "../../assets/icons8-twitter.svg";
import resume from "../../assets/ShaileshResume.pdf";
import mail from "../../assets/mail.png";
import aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Hero = () => {
  useEffect(() => {
    aos.init({ duration: 1000 }); // Initialize AOS with a more reasonable duration
  }, []);

  return (
    <div className="text-white flex flex-col mt-3 bg-black" id="Hero">
      <div
        className="flex items-center justify-center text-2xl"
        data-aos="fade-down">
        <h1 className="w-[40%] text-center mt-4 font-serif uppercase">
          Hello, I am Shailesh Kale,
          <span className="text-[#22c3e6]"> Web Developer </span> Thank you for
          <span className="text-[#22c3e6]"> connecting with me.</span>
        </h1>
      </div>
      <div
        className="flex flex-col md:flex-row flex-wrap items-center justify-center"
        data-aos="fade-down">
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <img
            src={profileimg}
            alt="profile-img"
            className="w-60 h-auto object-cover rounded-full"
            data-aos="fade-right"
          />
          <div className="w-[37rem]">
            <h1 className="w-full font-serif text-2xl underline text-[#22c3e6]">
              Shailesh Kale
            </h1>
            <p className="w-[80%] font-serif">
              As a Software Engineer I am working on the JavaScript and
              JavaScript based technology to develop the website more
              efficiently.
            </p>
            <div className="mt-4">
              <a href={resume} download="Shailesh Kale Resume.pdf">
                <button
                  className="p-2 rounded-lg cursor-pointer"
                  style={{ border: "2px solid #22c3e6" }}>
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2" data-aos="fade-left">
          <h2 className="font-serif">Let's Connect</h2>
          <div className="flex gap-2">
            <a
              href="https://github.com/Shaileshkale17"
              target="_blank"
              rel="noopener noreferrer">
              <img src={github} alt="github" className="w-4 md:w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shailesh-kale-0b1236228"
              target="_blank"
              rel="noopener noreferrer">
              <img src={linkedin} alt="Linkedin" className="w-4 md:w-6" />
            </a>
            <a
              href="https://twitter.com/Shaileshkale123"
              target="_blank"
              rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="w-4 md:w-6" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shaileshkale87730@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <img src={mail} alt="mailBox" className="w-4 md:w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
