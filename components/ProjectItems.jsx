import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const ProjectItems = ({title, background, projectURL}) => {
  return (
    <div>
        <div id='projects' className="relative flex justify-center h-auto w-full shadow-xl rounded-xl shadow-gray-500 rounded-lx py-4 group hover:bg-gradient-to-r from-[#2067b4] to-[#7caadc]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={background}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                {title}
              </h3>
              <p className="text-white text-center">React JS</p>
              <Link href={projectURL}>
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More information
                </p>
              </Link>
            </div>
          </div>
    </div>
  )
}

export default ProjectItems