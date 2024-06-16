import React from "react";
import CardImage from "../CardBox/imgCard";
// import Jewellery from "https://shaileshkale-portfolio.netlify.app/image/jewellery1452.PNG";
import pomototime from "../../assets/pomoto-time.webp";
import githubApi from "../../assets/github-Api.webp";
import Profile from "../../assets/ShaileshportfolioImage.png";

const Project = () => {
  return (
    <div className="text-white  bg-black">
      <h1 className="text-center py-16 text-xl font-bold font-serif text-[#22c3e6] uppercase">
        My Project
      </h1>

      <div className="flex flex-wrap justify-center items-center px-24  gap-11">
        {/* <CardImage
          title="Jewellery"
          text="JewellerySwift is an innovative online platform offering a curated collection of stylish and timeless jewelry pieces. With a focus on quality craftsmanship and unique designs, it provides a seamless shopping experience for those seeking elegant accessories."
          imgproject={Jewellery}
          TECHNICAL="HTML , CSS , JavaScript"
          projectLink="https://shaileshkale17.github.io/JewellerySwift/"
        /> */}
        <CardImage
          title="Pomodoro Timer"
          text="The Pomodoro Timer is a productivity technique involving 25-minute focused work intervals (Pomodoros) followed by short breaks, aiding concentration and time management. It helps enhance productivity and maintain a balance between work and rest."
          imgproject={pomototime}
          TECHNICAL=" reactJs , firebase , redux "
          projectLink="https://pomodro-timer-app-shailesh.netlify.app/"
        />
        <CardImage
          title="Github Profile"
          text="GitHub Profile API website provides a seamless interface to access and retrieve information from GitHub user profiles, offering developers a convenient way to integrate and display GitHub data in their applications ."
          imgproject={githubApi}
          TECHNICAL=" React , axios "
          projectLink="https://githubprofilesite.netlify.app/"
        />
        <CardImage
          title="Github Profile"
          text="GitHub Profile API website provides a seamless interface to access and retrieve information from GitHub user profiles, offering developers a convenient way to integrate and display GitHub data in their applications ."
          imgproject={githubApi}
          TECHNICAL=" React , axios "
          projectLink="https://githubprofilesite.netlify.app/"
        />
        <CardImage
          title="Shailesh Portfolio"
          text=" Shailesh portfolio showcases a dynamic blend of React js and tailwind Css , with seamless deployment on Vercel, powered by a robust backend using Google App and data storage in Google Excel Sheets."
          imgproject={Profile}
          TECHNICAL=" Frontend :- React js and tailwindcss, BackEnd :- Google App , DataBase Google Excel Sheet "
          projectLink="/"
        />
      </div>
    </div>
  );
};

export default Project;
