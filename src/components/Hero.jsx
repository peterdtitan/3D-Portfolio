import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineMedium, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex flex-col md:flex-row pb-20">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-red-600'>Peter</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a Full-Stack Engineer <br className='sm:block hidden' />
              and I build innovative solutions <br className='md:block hidden' />
              for the web.
            </p>
            <div className="flex gap-4 mt-4 md:mt-8">
            <button className='flex gap-2 p-1 bg-inherit hover:text-red-500 text-4xl md:text-5xl'
              onClick={() => window.open("https://github.com/peterdtitan", "_blank")}>
              <AiFillGithub />
            </button>
            <button className='flex gap-2 p-1 bg-inherit hover:text-red-500 text-4xl md:text-5xl'
              onClick={() => window.open("https://linkedin.com/in/peterokorafor", "_blank")}>
              <AiFillLinkedin />
            </button>  
            <button className='flex gap-2 p-1 bg-inherit hover:text-red-500 text-4xl md:text-5xl'
              onClick={() => window.open("https://twitter.com/PeterDeTitan", "_blank")}>
              <AiOutlineTwitter />
            </button> 
            <button className='flex gap-2 p-1 bg-inherit hover:text-red-500 text-4xl md:text-5xl'
              onClick={() => window.open("https://medium.com/@peterdtitan", "_blank")}>
              <AiOutlineMedium />
            </button>
            </div>
          </div>

          
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
