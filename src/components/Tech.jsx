import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>How we have helped!!</h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 pt-20'>
     
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <div icon={technology.icon} >
            <img src={technology.icon} alt="" />
            </div>
        </div>
      ))}
    </div>
      </>
  );
};

export default SectionWrapper(Tech, "works");
