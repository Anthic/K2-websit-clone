import gsap from 'gsap';
import { useContext, useRef } from 'react';
import { NavbarContext } from '../../Context/NavContext';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

function FullScreenNav() {
  const fullScreenRef = useRef(null);
  const fullNavLinksRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();

    tl.to('.fullscreennav', {
      display: 'block',
      duration: 0,
    });

    tl.to('.stairing', {
      delay: 0.1,
      height: '100%',
      duration: 0.8,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.2,
      },
    });

    tl.fromTo(
      '.link',
      {
        y: 150,
        opacity: 0,
        skewY: 10,
        rotateX: -20,
      },
      {
        y: 0,
        opacity: 1,
        skewY: 0,
        rotateX: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: {
          amount: 0.3,
        },
      }
    ) /
      tl.to(
        '.navlink',
        {
          opacity: 1,
          duration: 0.5,
        },
        '-=0.5'
      );
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();

    tl.to('.navlink', { opacity: 0, duration: 0.3 });

    tl.to('.link', {
      y: -50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power2.in',
    });

    tl.to(
      '.stairing',
      {
        height: 0,
        duration: 0.6,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.1,
        },
      },
      '-=0.2'
    );

    tl.to('.fullscreennav', {
      display: 'none',
      duration: 0,
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 fixed top-0 left-0 bg-transparent"
    >
      {/* Background Stairs */}
      <div className="h-screen w-full absolute top-0 left-0 -z-10">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>

      {/* Content Container */}
      <div ref={fullNavLinksRef} className="relative h-full flex flex-col">
        {/* Header */}
        <div className="navlink opacity-0 flex-none flex w-full justify-between lg:px-6 px-4 py-4 items-center">
          <div>
            <div to={'/'} className="lg:w-32 md:w-28 sm:w-20 w-16">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="lg:h-24 md:h-20 sm:h-16 h-12 lg:w-24 md:w-20 sm:w-16 w-12 relative cursor-pointer flex items-center justify-center group"
          >
            <div className="lg:h-24 h-16 w-0.5 -rotate-45 absolute bg-[#D3FD50] transition-transform duration-300"></div>
            <div className="lg:h-24 h-16 w-0.5 rotate-45 absolute bg-[#D3FD50] transition-transform duration-300"></div>
          </div>
        </div>

        {/* Links Container */}
        <div className="flex-grow flex flex-col w-full pb-6">
          {/* Items */}
          <div className="link flex-1 relative border-t-[1px] border-white w-full overflow-hidden flex items-center justify-center opacity-0">
            <Link
              to="/projects"
              onClick={() => {
                setNavOpen(false);
              }}
              className="font-[font2] lg:text-[7vw] md:text-[8vw] sm:text-5xl text-4xl text-center uppercase tracking-tight"
            >
              Projets
            </Link>
            <div className="moveLink absolute text-black flex items-center top-0 left-0 w-full h-full bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link flex-1 relative border-t-[1px] border-white w-full overflow-hidden flex items-center justify-center opacity-0">
            <Link
              to="/agence"
              onClick={() => {
                setNavOpen(false);
              }}
              className="font-[font2] text-4xl lg:text-[7vw] text-center uppercase tracking-tight"
            >
              Agence
            </Link>
            <div className="moveLink absolute text-black flex items-center top-0 left-0 w-full h-full bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link flex-1 relative border-t-[1px] border-white w-full overflow-hidden flex items-center justify-center opacity-0">
            <h1 className="font-[font2] text-4xl lg:text-[7vw] text-center uppercase tracking-tight">
              Contact
            </h1>
            <div className="moveLink absolute text-black flex items-center top-0 left-0 w-full h-full bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link flex-1 relative border-y-[1px] border-white w-full overflow-hidden flex items-center justify-center opacity-0">
            <h1 className="font-[font2] text-4xl lg:text-[7vw] text-center uppercase tracking-tight">
              Blogs
            </h1>
            <div className="moveLink absolute text-black flex items-center top-0 left-0 w-full h-full bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-2xl text-center uppercase px-4">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-28 h-10 rounded-full shrink-0 lg:w-80 w-24 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenNav;
