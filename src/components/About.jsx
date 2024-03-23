import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full" innerRef={(ref) => ref}>
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Services</p>
        <h2 className={styles.sectionHeadText}>How we can help You!</h2>
      </div>

      <div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Discover a spectrum of creative services tailored to elevate your brand.
        From custom stickers and hand-drawn designs to crafting captivating
        logos and branding solutions, we specialize in bringing your vision to
        life. Delve into our expertise in mascot creation, NFT and whitepaper
        design, pitch deck development, and captivating social media posters.
        Let's transform your ideas into impactful visuals.
      </div>

      <div className="mt-20 flex items-center justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "services");
