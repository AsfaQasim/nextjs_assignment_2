import React from "react";
import mypic from "../public/myphoto.jpeg";
import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-purple-200 min-h-screen">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Best destination around the world.
              <br className="hidden lg:inline-block" />
              Travel,Enjoy and live a new and full life.
            </h1>
            <p className="mb-8 leading-relaxed">
              My travel website provides users with tools to explore and book
              destinations, offering detailed information on flights,
              accommodations, and attractions. It helps travelers plan their
              perfect trip by providing reviews, itineraries, and deals all in
              one place.
            </p>
            <div className="flex justify-center gap-3">
              <Link href={'./contact'}>
              <button  className="inline-flex text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-950 rounded text-lg">
                Contact
              </button>
              </Link>
              <br />
              <Link href={'./contact'}>
              <button className="inline-flex gap-8 text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-purple-950 rounded text-lg">
                Booking
              </button>
              </Link>
            </div>
         
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image alt="hero" src={mypic} className="rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
