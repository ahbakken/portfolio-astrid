import React from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240] m-auto py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#2067b4]">
          Contact
        </p>
        <p className="py-4">Get In Touch</p>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scake-105 ease-in duration-300"
                  src="https://www.loma.org/contentassets/385e0595df0c460d8a665f3dab7131ad/contact-720-495.jpg"
                />
              </div>
              <div>
                <h2 className="py-5">Astrid</h2>
                <p className="py=2">
                  I am avialable for hiring; freelance or fulltime.
                </p>
              </div>
              <div>
                <p className="uppercase pt-7">Get in touch</p>
                <div className="flex items-center justify-between py-4">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
