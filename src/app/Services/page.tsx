import React from "react";
import Image from "next/image";
import naran from '../../public/narankghanpic.jpg'
import malam from '../../public/malamjabba.jpeg'
import skardu from '../../public/skardu.jpeg'
import islamabad from '../../public/islamabad.jpeg'

export default function Service() {
  return (
    <div className="bg-purple-200">
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
             My Services.
            </h1>
          
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
      
            
Personalized travel planning to create your ideal getaway, from luxury escapes to budget-friendly adventures.

Exclusive deals on flights, hotels, and activities to ensure a seamless travel experience.

24/7 support throughout your journey, ensuring a stress-free and enjoyable trip from start to finish.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-purple-300 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={naran}
                alt="content"
              />
              <h3 className="tracking-widest text-purple-700 text-xs font-medium title-font">
              Place
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
           Naran Kaghan.
              </h2>
              <p className="leading-relaxed text-base">
                
Embark on an unforgettable journey to Naran and Kaghan, where breathtaking landscapes meet adventure. Explore the lush green valleys, crystal-clear lakes, and snow-capped mountains that make this region a paradise for nature lovers. Whether it&apos;s the serene beauty of Saif-ul-Malook Lake or the thrilling Babusar Pass, our Naran Kaghan tour offers the perfect blend of relaxation and excitement. Let us guide you through one of Pakistan&apos;s most stunning destinations, creating memories that will last a lifetime.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-purple-300 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={malam}
                alt="content"
              />
              <h3 className="tracking-widest text-purple-700 text-xs font-medium title-font">
                Place.
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Malam Jabba.
              </h2>
              <p className="leading-relaxed text-base">
              
Join our exclusive Malam Jabba tour and experience the thrill of Pakistan&apos;s top winter wonderland. From skiing on pristine slopes to exploring the breathtaking landscapes of Swat Valley, this tour offers a perfect mix of adventure and relaxation. Whether you&apos;re an avid winter sports enthusiast or simply looking to enjoy the beauty of snow-capped peaks, Malam Jabba has something for everyone. Let us take care of your travel and accommodation, ensuring a seamless and memorable journey to one of Pakistan&apos;s most scenic destinations.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-purple-300 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={skardu}
                alt="content"
              />
              <h3 className="tracking-widest text-purple-700 text-xs font-medium title-font">
              Place.
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Skardu.
              </h2>
              <p className="leading-relaxed text-base">
                
Discover the majestic beauty of Skardu with our specially curated tour, taking you deep into the heart of Pakistan&apso;s northern wilderness. From the crystal-clear waters of Shangrila Resort to the towering peaks of K2 and the serene Shigar Valley, Skardu offers a perfect blend of adventure and tranquility. Explore ancient forts, hike through stunning landscapes, and witness the breathtaking beauty of the world&apos;s highest mountains. Our Skardu tour is designed to provide you with an unforgettable experience, ensuring comfort, adventure, and memories that will last a lifetime.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-purple-300 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src= {islamabad}
                alt="content"
              />
              <h3 className="tracking-widest text-purple-700 text-xs font-medium title-font">
                Place.
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Islamabad.
              </h2>
              <p className="leading-relaxed text-base">
              Explore the modern charm and rich cultural heritage of Pakistan&apos;s capital with our exclusive Islamabad tour. From the iconic Faisal Mosque and Daman-e-Koh&apos;s panoramic views to the tranquil beauty of Rawal Lake and the bustling markets of Saddar, Islamabad offers a unique blend of nature, history, and urban sophistication. Whether you&apos;re seeking a peaceful retreat in the Margalla Hills or exploring the city&apos;s vibrant lifestyle, our Islamabad tour promises a perfect mix of relaxation and discovery in the heart of Pakistan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
