import React, { useEffect } from "react";
import CardImage from "../CardBox/imgCard";
import hackRankIng from "../../assets/shailesh kale hackrank.png";
import aos from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Cartification = () => {
  useEffect(() => {
    aos.init({ duration: 1000 }); // Initialize AOS with a more reasonable duration
  }, []);
  return (
    <div className="text-white  bg-black">
      <h1
        className="text-center py-16 text-xl font-bold font-serif text-[#22c3e6] uppercase"
        data-aos="zoom-in">
        Cartification
      </h1>

      <div className="flex flex-wrap justify-center items-center px-24  gap-11">
        <div data-aos="zoom-in">
          <CardImage
            title="JavaScript (Intermediate)"
            text=""
            imgproject={hackRankIng}
            TECHNICAL="JavaScript"
            projectLink="https://www.hackerrank.com/certificates/17d0e740c724"
          />
        </div>
      </div>
    </div>
  );
};

export default Cartification;
