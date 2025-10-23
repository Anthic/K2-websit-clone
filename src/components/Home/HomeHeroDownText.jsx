import { Link } from "react-router-dom";

const HomeHeroDownText = () => {
  return (
    <div className="flex items-center justify-center  font-[font1] text-white gap-3 ">
      <Link
        to={"/projects"}
        className="text-[3.5vw] uppercase leading-[4vw] border-4 border-white rounded-full px-5 py-3 hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer"
      >
        Projects
      </Link>
      <Link
        to={"/agence"}
        className="text-[3.5vw] uppercase leading-[4vw] border-4 border-white rounded-full px-5 py-3 hover:border-[#D3FD50] hover:text-[#D3FD50] cursor-pointer"
      >
        Agences
      </Link>
    </div>
  );
};

export default HomeHeroDownText;
