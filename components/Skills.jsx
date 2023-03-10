import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#2067b4]">
          Skills
        </p>
        <h2 className='py-4'>What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/html.png"
                  width='64'
                  height="64"
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className=''>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/css.png"
                  width='64'
                  height="64"
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className=''>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/github1.png"
                  width='64'
                  height="64"
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className=''>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/js.png"
                  width='64'
                  height="64"
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className=''>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/nextjs.png"
                  width='64'
                  height="64"
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className=''>NextJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/node.png"
                  width='64'
                  height="64"
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className=''>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/react.png"
                  width='64'
                  height="64"
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className=''>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/tailwind.png"
                  width='64'
                  height="64"
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className=''>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/minecraft-education.png"
                  width='64'
                  height="64"
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className=''>Minecraft Education</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/python.png"
                  width='64'
                  height="64"
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className=''>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/kotlin.png"
                  width='64'
                  height="64"
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className=''>Kotlin</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
