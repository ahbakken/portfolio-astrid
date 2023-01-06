import React from 'react';
import Image from 'next/image';
// rafce

const Navbar = () => {
  return (
    <div className="fixed w-full h-28 shadow-xl z-[108]">
      <div className="flex justify-between items-center w-full px-2 2xl:px-16">
      <Image src='/../public/assets/skills/js.png' height="10" width="100" alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
