import React from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-{1240px} w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-700">
            I am ready to build for you
          </p>
          <h1 className="py-4 text-gray-700">
            Hello my name is <span className="text-[#2067b4]">Astrid</span>
          </h1>
          <h2 className="py-4 text-gray-700">Frontend developer</h2>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            27 years old. Interests include: playing video games and board games
            with my friends, reading books, playing to music and hiking. I'm a
            beginner frontend and backend developer. Intending to specialize in
            web and mobile development. I'm looking for opportunities to learn
            and grow as well as knowing new cultures and places.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hoover:scale ease-in duration-100">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hoover:scale ease-in duration-100">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hoover:scale ease-in duration-100">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hoover:scale ease-in duration-100">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
