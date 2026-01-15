import React from "react";

function FullScreenNav() {
  return (
    <div
      id="fullscreennav"
      className="text-white py-40 h-screen w-full absolute bg-amber-600"
    >
      <div id="all-links">
        <div className="relative border-t-1 border-white">
          <h1 className="font-[font1] text-[4vw] text-center  uppercase">
            PROJECTS
          </h1>
          <div className=" flex absolute top-0 bg-[#D3FD50] text-black" >
            <div className="moveX flex  items-center " >
              <h2 className="whitespace-nowrap font-[font1] text-[4vw] text-center  uppercase">Pour Tout voir</h2>
                
                 <img  className="w-36 h-16 shrink-0 rounded-full object-cover "
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt=""
              />
             
              <h2 className="whitespace-nowrap font-[font1] text-[4vw] text-center  uppercase">Pour Tout voir</h2>
              
                 <img className="w-36 h-16 shrink-0  rounded-full object-cover "
                src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                alt=""
              />
              
            </div>
            <div className="moveX flex  items-center " >
              <h2 className="whitespace-nowrap font-[font1] text-[4vw] text-center  uppercase">Pour Tout voir</h2>
                
                 <img  className="w-36 h-16 shrink-0 rounded-full object-cover "
                src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                alt=""
              />
             
              <h2 className="whitespace-nowrap font-[font1] text-[4vw] text-center  uppercase">Pour Tout voir</h2>
              
                 <img className="w-36 h-16 shrink-0  rounded-full object-cover "
                src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                alt=""
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenNav;
