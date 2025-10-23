import React from "react";
import Video from "./Video";

const HomeHeroUpperText = () => {
  return (
    <div className="font-[font1] text-white p-5 text-center">
      <div className="text-[5.5vw] uppercase leading-[7vw] flex items-center justify-center">
        The Spark{" "}
      </div>         
      <div className="text-[5.5vw] uppercase leading-[7vw] flex items-center justify-center">
        That,
        <div className="h-[6vw] w-[12vw] rounded-full overflow-hidden mt-2">
          <Video />
        </div>{" "}
        Generates{" "}
      </div>
      <div className="text-[5.5vw] uppercase leading-[7vw] flex items-center justify-center">
        Creativity
      </div>
    </div>
  );
};

export default HomeHeroUpperText;
