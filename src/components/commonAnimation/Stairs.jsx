import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';
const Stairs = (props) => {
  const currentLocation = useLocation().pathname;
  const starParentRef = useRef(null);
  const pageRef = useRef(null);
  useGSAP(
    function () {
      const tl = gsap.timeline();

      tl.to(starParentRef.current, {
        display: 'block',
      });
      tl.from('.stair', {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      });
      tl.to('.stair', {
        y: '100%',
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(starParentRef.current, {
        display: 'none',
      });
      tl.to('.stair', {
        y: '0%',
      });
      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1,
      });
    },
    [currentLocation]
  );
  console.log(props);
  return (
    <>
      <div
        ref={starParentRef}
        className="h-screen w-full fixed z-20 flex top-0"
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </>
  );
};

export default Stairs;
