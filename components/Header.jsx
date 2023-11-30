import Image from "next/image";
import Airbnb from './asset/airbnb.png'

import {
  SearchIcon,
  UserIcon,
  UserCircleIcon,
  GlobeAltIcon,
  MenuIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left section */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src={Airbnb}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className=" flex  items-center md:border-2 rounded-full py-2 ">
        {/* //middle section */}
        <input
          type="text"
          placeholder="Start your search"
          className=" flex-grow pl-5 bg-transparent text-gray-600 outline-none md:shadow-sm"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-3" />
      </div>

      {/* right section */}
      <div className="flex text-gray-600 items-center justify-end space-x-4">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeIcon className="h-6" />
        <div className="flex items-center space-x-2  border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
