import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowUpRightCircle } from 'react-icons/bs';

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCardPc = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 40,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='flex gap-4 items-center justify-center mt-5'>
          <button className='flex gap-2 p-2 rounded-md bg-inherit border-[1.5px] hover:bg-white hover:text-black text-sm'
            onClick={() => window.open(source_code_link, "_blank")}>
            See Source <AiFillGithub size={20} />
          </button>
          <button className='flex gap-2 p-2 rounded-md bg-inherit border-[1.5px] hover:bg-white hover:text-black text-sm'
            onClick={() => window.open(live_link, "_blank")}>
            See Live <BsArrowUpRightCircle size={20} />
          </button>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectCardMobile = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link
}) => {
  return (
    <div>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='flex gap-4 items-center justify-center mt-5'>
          <button className='flex gap-2 p-2 rounded-md bg-inherit border-[1.5px] hover:bg-white hover:text-black text-sm'
            onClick={() => window.open(source_code_link, "_blank")}>
            See Source <AiFillGithub size={20} />
          </button>
          <button className='flex gap-2 p-2 rounded-md bg-inherit border-[1.5px] hover:bg-white hover:text-black text-sm'
            onClick={() => window.open(live_link, "_blank")}>
            See Live <BsArrowUpRightCircle size={20} />
          </button>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [width, height] = windowSize.current;

  return (
    <>
      {width < 768 ? (
        <div>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>
      ) : (
        <motion.div variants={textVariant()} id="projects">
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>
      )}

      <div className='w-full flex'>
        {width < 768 ? (
          <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            The following projects showcases my skills and experience through
            <span className="text-red-500"> open to public view </span>examples of my work. {' '}
            Each project is briefly described with a
            link to the respective code repository and live demo. This reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        ) : (
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            The following projects showcases my skills and experience through
            <span className="text-red-500"> open to public view </span>examples of my work. {' '}
            Each project is briefly described with a
            link to the respective code repository and live demo. This reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        )}
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {width < 768 ? (
          projects.map((project, index) => (
            <ProjectCardMobile key={`project-${index}`} index={index} {...project} />
          ))
        ): (
          projects.map((project, index) => (
            <ProjectCardPc key={`project-${index}`} index={index} {...project} />
          ))
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
