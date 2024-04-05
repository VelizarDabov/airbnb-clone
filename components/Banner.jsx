import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[600px] ">
      <Image
        src="https://images.pexels.com/photos/12067725/pexels-photo-12067725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        layout="fill"
        objectFit="cover"
        alt="banner image"
      />
      <div className="absolute top-1/4 w-full text-center text-gray-800">
        <p className="text-bold sm:text-lg mt-7 font-semibold">
          Not sure where to go?
        </p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
