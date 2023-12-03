'use client';

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SearchData from "./searchData";


const Search = () => {  
  const searchData = SearchData();
  const { location, startDate, endDate, numberGuests } = searchData;

  return (
    
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">test:{searchData.location}</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
         
          </h1>
          <p className="text-xs"></p>
          <p className="text-xs">Number of Guests: {searchData.numberGuests}</p>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
  </div>

</section>
</main>
    <Footer />
    </div>
  )
}

export default Search