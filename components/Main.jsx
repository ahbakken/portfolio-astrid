import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-{1240px} w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-700">
            I am ready to build for you
          </p>
          <h1 className="py-4 text-gray-700">
            Hello! My name is <span className="text-[#2067b4]">Astrid</span>
          </h1>
          <h2 className="py-4 text-gray-700">Frontend developer</h2>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-5">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hoover:scale ease-in duration-100">
              <Link href={'https://www.linkedin.com/in/astrid--bakken/'}>
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hoover:scale ease-in duration-100">
              <Link href={'https://github.com/ahbakken'}>
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hoover:scale ease-in duration-100">
              <Link href="mailto:astridbakken95@gmail.com">
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
