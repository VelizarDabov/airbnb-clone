// 'use client';

import Footer from "@/components/Footer"
import Header from "@/components/Header"
// import { useRouter } from "next/navigation";

const Search = () => {  
  // const router = useRouter();
  // let { location, startDate, endDate, numberGuests } = router;

  return (
    
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">Location: test</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Start Date: test
          </h1>
          <p className="text-xs">End Date: test</p>
          <p className="text-xs">Number of Guests: test</p>
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