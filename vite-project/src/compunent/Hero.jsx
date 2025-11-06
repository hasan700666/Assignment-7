import React from "react";
import img1 from "../assets/vector1.png";
import img2 from "../assets/vector2.png";

const Hero = ({ increaseNumber, decreaseNumber }) => {
  return (
    <div className="flex justify-center items-center md:flex-row flex-col">
      <div className="bg-linear-to-r text-white from-[#632EE3] to-[#9F62F2] mx-5 rounded-2xl text-center flex items-center md:h-40 h-40 md:mb-0 mb-10">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <div className="text-xl">In-Progress</div>
          <div className="text-6xl font-bold mt-5">{increaseNumber}</div>
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="bg-linear-to-r text-white from-[#54CF68] to-[#00827A] mx-5 rounded-2xl text-center flex items-center md:h-40 h-40">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <div className="text-xl">Resolved</div>
          <div className="text-6xl font-bold mt-5">{decreaseNumber}</div>
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
