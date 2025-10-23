import React from "react";
import Video from "../components/Home/Video";
import HomeHeroUpperText from "../components/Home/HomeHeroUpperText";
import HomeHeroDownText from "../components/Home/HomeHeroDownText";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen fixed">
        <Video />
      </div>

      <div className="w-screen h-screen relative flex flex-col justify-between">
        <HomeHeroUpperText />
        <HomeHeroDownText />
      </div>
    </div>
  );
};

export default Home;
