import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import  {towns } from '@/data/Towns'
import SmallCard from '@/components/SmallCard'
import {places} from '@/data/Places'
import MediumCard from '@/components/MediumCard'
import LargeCard from '@/components/LargeCard'
import Footer from '@/components/Footer'

export default function Home() {

  return (
    <div className="bg-white">
 <Head className='bg-white'>
  <title>Airbnb-Clone</title>
 </Head>
<Header />
    <Banner />
<main className='max-w-7xl mx-auto px-8 sm:px-16'>
  <section className='pt-6'>
    <h2 className='text-4xl  font-semibold pb-5 text-black'>Explone Nearby</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    {towns.map((town) => (
 <SmallCard key={Math.random()} img={town.img} distance={town.distance} location={town.location} />
 
))}
    </div>


  </section>
  <section>
    <h2 className='text-4xl font-semibold py-8 text-black '>Live Anywhere</h2>
    <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
    {places.map((place) =>(
     <MediumCard key={Math.random()} img={place.img} title={place.title}  />
      ))}
    </div>
  
  </section>
  <LargeCard
  img='https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  title='The Gratest Outdoors'
  description='Wishlists curated by Airbnb'
  buttonText='Get Inspired'
  />
<Footer />
</main>
    
    </div>
  )
}
