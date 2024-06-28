import React from "react";
import CardImage from "../CardBox/imgCard";
import hackRankIng from "../../assets/shailesh kale hackrank.png";
const Cartification = () => {
  return (
    <div className="text-white  bg-black">
      <h1 className="text-center py-16 text-xl font-bold font-serif text-[#22c3e6] uppercase">
        Cartification
      </h1>

      <div className="flex flex-wrap justify-center items-center px-24  gap-11">
        <CardImage
          title="JavaScript (Intermediate)"
          text=""
          imgproject={hackRankIng}
          TECHNICAL="JavaScript"
          projectLink="https://www.hackerrank.com/certificates/17d0e740c724"
        />
      </div>
    </div>
  );
};

export default Cartification;
