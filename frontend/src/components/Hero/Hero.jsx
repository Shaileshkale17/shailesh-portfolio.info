import React from "react";
import profileimg from "../../assets/Avatar-shailesh.jpg";
import github from "../../assets/icons8-github.svg";
import linkedin from "../../assets/icons8-linkedin.svg";
import twitter from "../../assets/icons8-twitter.svg";

import mail from "../../assets/mail.png";

const Hero = () => {
  return (
    <div className="text-white flex flex-col mt-3 bg-black ">
      <div className="flex items-center justify-center text-2xl ">
        <h1 className="w-[40%] text-center mt-4 font-serif uppercase">
          Hello, I am Shailesh Kale,
          <span className="text-[#22c3e6]"> Web Developer </span> Thank you for
          <span className="text-[#22c3e6]"> connecting with me.</span>
        </h1>
      </div>
      <div className="flex flex-col  md:flex-row flex-wrap  items-center justify-center">
        <div
          className="flex  flex-wrap gap-8 items-center justify-center
        ">
          <img
            src={profileimg}
            alt="profile-img"
            className="w-60 h-auto object-cover rounded-full"
          />
          <div className="w-[37rem]">
            <h1 className="w-full font-serif text-2xl underline text-[#22c3e6]">
              Shailesh Kale
            </h1>
            <p className="w-[80%] font-serif">
              As a Software Engineer I am working on the JavaScript and
              JavaScript based technology to develop the website in more
              efficiently.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-serif">Let Connect</h2>
          <div className="flex gap-2">
            <a href="https://github.com/Shaileshkale17" target="_blank">
              <img
                src={github}
                alt="github"
                class="icon"
                className="w-4 md:w-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shailesh-kale-0b1236228"
              target="_blank">
              <img
                src={linkedin}
                alt="Linkedin"
                class="icon"
                className="w-4 md:w-6"
              />
            </a>
            <a href="https://twitter.com/Shaileshkale123" target="_blank">
              <img src={twitter} alt="X" class="icon" className="w-4 md:w-6" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=shaileshkale87730@gmail.com"
              target="_blank">
              <img
                src={mail}
                alt="mailBox"
                class="icon"
                className="w-4 md:w-6"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
