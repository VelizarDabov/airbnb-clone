'use client'
import Image from "next/image";
import Airbnb from './asset/airbnb.png'
import { useState } from "react";
import {
  SearchIcon,
  UsersIcon,
  UserCircleIcon,
  GlobeAltIcon,
  MenuIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { endOfDecadeWithOptions } from "date-fns/fp";
import { useRouter } from "next/navigation";
import Search from "@/app/search/page";
const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberGuests, setNumberGuests] = useState(1);
  const router = useRouter();
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  // const navigate = () => {
  //   router.push({
  //     pathname: ('/search'),
  //     query: {
  //       location: searchInput,
  //       startDate: startDate.toISOString(),
  //       endDate: endDate.toISOString(),
  //       numberGuests,
  //     },
  //   });
  // };
  

  const resetInput = () => {
setSearchInput('');
  }
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left section */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
        onClick={() => router.push('/')}
          src={Airbnb}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="airbnb logo"
        />
      </div>
      <div className=" flex  items-center md:border-2 rounded-full py-2 ">
        {/* //middle section */}
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-10">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberGuests}
              min={1}
              onChange={(e) => setNumberGuests(e.target.value)}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
            
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
Cancel
            </button>
            <button onClick={() => router.navigate('/search')}className="flex-grow text-red-400">
Search
            </button>
            <Search  location= {searchInput}
        startDate= {startDate.toISOString()}
        endDate = {endDate.toISOString()}
        numberGuests = {numberGuests} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
