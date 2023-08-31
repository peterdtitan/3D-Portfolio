import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, skills } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const Tech = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [width, height] = windowSize.current;

  return (
    <div className="flex flex-col gap-y-10">
      {width < 768 ? (
        <div>
          <p className={`${styles.sectionSubText} `}>My Skills</p>
          <h2 className={`${styles.sectionHeadText}`}>Technologies</h2>
        </div>
      ) : (
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My skills</p>
          <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
        </motion.div>
      )}

      <div className="flex flex-row flex-wrap justify-center gap-10">
      {skills.map((skill) => (
        <div className="flex flex-col h-8">
          <p>{skill.title}</p>
          <p>{skill.title}</p>
        </div>
      ))}
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-8'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
