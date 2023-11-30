import Image from "next/image";
import React from "react";
import bannerImg from "./asset/banner.jpg";


const Banner = () => {
  
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[600px]">
      <Image src={bannerImg} layout="fill" objectFit="cover" />
      <div className="absolute top-1/4 w-full text-center text-black">
        <p className="text-sm sm:text-lg">Not sure where to go ? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;