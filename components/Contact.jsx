import React from 'react';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#2067b4]">
          Contact
        </p>
        <p className="py-4">Get In Touch</p>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scake-105 ease-in duration-300 flex"
                  src="/assets/contactIcon.jpg"
                  alt="/"
                  width={5000}
                  height={500}
                />
              </div>
              <div>
                <h2 className="py-5">Contact me</h2>
                <p className="py-2">
                  Thank you for visiting me. For further details, please contact
                  me.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between py-4">
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
        </div>
        <div className="flex justify-center py-10">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hoover:scale ease-in duration-100">
              <HiOutlineChevronDoubleUp className="text-[#2067b4]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
