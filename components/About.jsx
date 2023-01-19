import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-[#2067b4] uppercase text-xl tracking-widest">
            About
          </p>
          <h2 className="py-2">Who I Am</h2>
          <p className="py-2 text-gray-600">|| Hello there!</p>
          <p className="py-2 text-gray-600">
            I'm 28 years old. Interests include: playing video games and board
            games with my friends, reading books, playing music and hiking.
            I'm a beginner developer, intending to specialize in web and mobile
            development.
          </p>
          <p className="py-2 text-gray-600">
            I'm looking for opportunities to learn and grow, as well as getting to know
            new cultures and places. I am avialable for hiring; freelance or fulltime
          </p>
        </div>
        <div className="w-full h-auto shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/profil.jpg"
            alt="/"
            height="100"
            width="400"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
