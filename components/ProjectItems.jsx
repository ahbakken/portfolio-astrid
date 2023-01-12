import React from 'react'
import Image from 'next/image';
import proj from '../public/assets/projects/projects-concept.jpg';
import play from '../public/assets/projects/play-button.jpg'
import postit from '../public/assets/projects/to-do-postit.jpg'
import Link from 'next/link';

const ProjectItems = ({title, backgroundIMG, projectURL}) => {
  return (
    <div>
        <div className="relative flex justify-center h-auto w-full shadow-xl rounded-xl shadow-gray-500 rounded-lx py-4 group hover:bg-gradient-to-r from-[#2067b4] to-[#7caadc]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={proj}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Project 1
              </h3>
              <p className="text-white text-center">React JS</p>
              <Link href="/">
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