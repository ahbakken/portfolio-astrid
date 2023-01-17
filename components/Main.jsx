import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
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
            27 years old. Interests include: playing video games and board games
            with my friends, reading books, playing to music and hiking. I'm a
            beginner developer. Intending to specialize in
            web and mobile development. I'm looking for opportunities to learn
            and grow as well as knowing new cultures and places.
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
