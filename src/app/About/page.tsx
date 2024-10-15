import Image from "next/image"
import React from "react"
import about from '../../public/aboutpic.jpeg'
import mypic from '../../public/myphoto.jpeg'


export default function About(){
  return(
    <div className="bg-purple-200">
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <Image
          alt="content"
          className= "object-cover h-full w-full rounded-full"
          src= {about}
          
        />
      </div>
      <div className="flex flex-col sm:flex-row mt-12">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center text-gray-400">
          
          <Image
      alt="hero"
        src={mypic}
        className="rounded-full"
        

      />
         
       
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              My Travel.
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
            <p className="text-base">
            Explore the world&apos;s most breathtaking destinations with our tailor-made travel packages. Your next unforgettable adventure starts here.
            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">
           
Discover hidden gems and iconic landmarks with our expertly curated itineraries. Whether you&apos;re seeking a relaxing getaway or an adventurous escape, we have the perfect destination for you. Let us handle the details, so you can focus on making memories that last a lifetime. From exotic beaches to vibrant cityscapes, your dream vacation is just a booking away.
          </p>
        
        </div>
      </div>
    </div>
  </div>

</section>
</div>
  )
}
