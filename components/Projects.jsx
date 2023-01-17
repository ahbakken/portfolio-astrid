import React from 'react';
import ProjectItems from './ProjectItems';

import project from '../public/assets/projects/projects-concept.jpg';
import play from '../public/assets/projects/play-button.jpg';
import postit from '../public/assets/projects/to-do-postit.jpg';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#2067b4]">
          projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Project"
            background={project}
            projectURL="/project"
          />
          <ProjectItems title="Play" background={play} projectURL="/play" />
          <ProjectItems
            title="PostIt"
            background={postit}
            projectURL="/postit"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
