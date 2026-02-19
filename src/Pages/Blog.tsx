import { useRef } from 'react';
import imageOne from '../assets/blog-image/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg';
import imageTwo from '../assets/blog-image/premium_photo-1661339265887-be15949790ff.avif';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const images = [
  imageOne,
  imageTwo,
  imageOne,
  imageTwo,
  imageOne,
  imageTwo,
  imageOne,
];

const Blog = () => {
  const containerRef = useRef(null);
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    images.forEach((_, i) => {
      if (i === 0) return;

      gsap.fromTo(
        wrapperRefs.current[i],
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${(i - 1) * 100}vh top`,
            end: `top+=${i * 100}vh top`,
            scrub: true,
          },
        }
      );
    });
  });

  return (
    <div>
      <div className="pt-[30vh]">
        <h2 className="font-[font2] lg:text-[9.5vw] text-7xl uppercase">
          Blog
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${images.length * 100}vh` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            ref={(el) => {
              wrapperRefs.current[i] = el;
            }}
            className="sticky top-0 h-screen w-full overflow-hidden"
            style={{ zIndex: i + 10 }}
          >
            <img
              src={img}
              alt={`blog ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
