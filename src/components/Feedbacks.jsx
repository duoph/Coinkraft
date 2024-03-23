import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className={`mt-10 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Find answers to frequently asked questions
          </p>
          <h2 className={styles.sectionHeadText}>FAQs</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        <Accordion open={open === 1}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`${styles.accordionHeadText}`}
          >
            How much do you charge for stickers and other graphic works?
          </AccordionHeader>
          <AccordionBody className={`${styles.accordionSubText}`}>
            At Coinkraft, we assess each project individually and provide
            customized quotes based on the specific requirements, time, and
            effort involved.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`${styles.accordionHeadText}`}
          >
            How much time will it take to complete a project?
          </AccordionHeader>
          <AccordionBody className={`${styles.accordionSubText}`}>
            The timeframe varies depending on the nature of the work. For custom
            projects, we aim to deliver within 48 hours, ensuring timely
            delivery without compromising quality.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`${styles.accordionHeadText}`}
          >
            What is your most renowned work?
          </AccordionHeader>
          <AccordionBody className={`${styles.accordionSubText}`}>
            Our most renowned work includes the creation of Baby Doge stickers,
            which have garnered widespread recognition and popularity in the
            crypto community.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`${styles.accordionHeadText}`}
          >
            Do you offer revisions on completed works?
          </AccordionHeader>
          <AccordionBody className={`${styles.accordionSubText}`}>
            Yes, we value client satisfaction. We provide revisions to ensure
            the final product aligns with your vision and expectations.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className={`${styles.accordionHeadText}`}
          >
            Can you handle large-scale projects for crypto ventures?
          </AccordionHeader>
          <AccordionBody className={`${styles.accordionSubText}`}>
            Absolutely! We have experience working with various crypto projects,
            from startups to established ventures. Our team is equipped to
            handle projects of any scale, delivering exceptional results
            tailored to your needs.
          </AccordionBody>
        </Accordion>

        {/* {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}*/}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
