import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/profile.png'

const About = () => {
  return (
    <section
      id="about"
      className="py-1 px-[4vw] md:px-[6vw] lg:px-[10vw] font-sans mt-4 md:mt-6 lg:mt-8"
    >
      <div className="flex flex-col-reverse md:flex-row gap-4 lg:gap-6 items-center">
        <div className="md:w-[55%] text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am Md Imam
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                'Fullstack Developer',
                'Java Developer',
                'Software Developer',
                'Programmer',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a software developer with over 1.5+ years of experience in
            building high-performance and scalable web applications. Skilled in
            both front-end and back-end development, I specialize in Java,
            Spring Boot, Microservices, Kafka, React.js, and modern distributed
            systems, and have solved 900+ problems on LeetCode, demonstrating
            strong problem-solving and algorithmic skills to create secure,
            seamless user experiences and efficient, production-grade solutions.
          </p>
          <a
            href="https://drive.google.com/file/d/1wUAgUmpS27Hq8OcK59Le-pZix1eokRO6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        <div className="md:w-[45%] flex justify-center">
          <Tilt
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Md Imam"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
