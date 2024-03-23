import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image }) => {
  return (
    <div className="bg-tertiary p-3 rounded-2xl">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          style={{ objectFit: "cover" }}
          alt="project_image"
          className="w-[300px] h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
      </div>

      <div className="mt-5 flex items-center justify-center">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>Portfolio</p>
        <h2 className={`${styles.sectionHeadText}`}>Who we have helped!!</h2>
      </div>

      <div className="w-full flex">
        <div className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Discover our completed projects showcasing innovative designs,
          seamless functionality, and client satisfaction. Explore our portfolio
          for a glimpse into our expertise.
        </div>
      </div>

      <div className="mt-20 flex items-center justify-center flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "portfolio");
