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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {skills.map((skillGroup) => (
        <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-xl transform transition-transform duration-300 ease-in-out" key={skillGroup.id}>
          <div className="flex flex-col bg-tertiary rounded-[20px] p-4 h-full cursor-default">
            <h3 className="text-white text-[20px] font-bold text-center">{skillGroup.title}</h3>
            <div className="flex flex-wrap justify-center gap-2 mt-2 text-center">
              {skillGroup.skills.map((category) =>
                category.skills.map((skill) => (
                  <p key={skill} className={`text-white ${category.color} `}>
                    {skill}
                  </p>
                ))
              )}
            </div>
          </div>
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

export default SectionWrapper(Tech, "technologies");
