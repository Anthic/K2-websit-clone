import React, { useRef } from "react";
import AgencyImageOne from "../assets/agencesImageOne.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Agents = () => {
  const imagedevRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.to(imagedevRef.current, {
      scrollTrigger: {
        trigger: imagedevRef.current,
       
        start: "top 11%",
        end: "top -100%",
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          let imageIndex = Math.floor(elem.progress * (imageArray.length - 1));
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
  return (
    <div>
      <div className="section1">
        <div
          ref={imagedevRef}
          className="absolute overflow-hidden h-[20vw] w-[15vw]  top-[5vw]  left-[30vw] rounded-4xl "
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src={AgencyImageOne}
            alt="fist person"
          />
        </div>
        <div className="relative font-[font1]">
          <div className="mt-[18vw]">
            <h1 className="text-[12vw] uppercase leading-[13vw] text-center">
              Sixty-seventh <br />
              Twelve
            </h1>
          </div>

          <div className="pl-[40%] mt-8">
            <p className="text-xl ">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our curiosity fuels our
              creativity. We remain humble and say no to big egos, even yours. A
              brand is alive. It has values, a personality, a story. If we
              forget that, we may make good numbers in the short term, but we'll
              kill it in the long term. That's why we're committed to providing
              perspective, to building influential brands.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agents;
