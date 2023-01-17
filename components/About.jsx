import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-[#2067b4] uppercase text-xl tracking-widest">
            About
          </p>
          <h2 className="py-2">Who I Am</h2>
          <p className="py-2 text-gray-600">// Write my own text</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse sed
            commodi vel consequuntur quibusdam delectus iure aperiam ut quia
            assumenda! Quod quos fugiat fuga reiciendis esse inventore
            cupiditate quae veniam?
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae
            laboriosam ipsam similique vel odit accusamus a enim? Sequi enim
            incidunt facere quasi iusto est asperiores illo animi voluptates
            dolores?
          </p>
          <p className="py-2 text-gray-600 cursor-pointer">Some projects I've done lately</p>
        </div>
        <div className='w-full h-auto shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            src="/../public/assets/contact.jpg"
            alt="/"
            height="100"
            width="400"
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
