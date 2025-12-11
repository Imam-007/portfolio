import React from 'react'
import { experiences } from '../../constants'

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Center Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[3px] bg-white/20 h-full"></div>

        {/* Timeline Entries */}
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0

          return (
            <div
              key={exp.id}
              className="relative w-full flex flex-col sm:flex-row items-center mb-24"
            >
              {/* LEFT SIDE CARD */}
              <div
                className={`hidden sm:flex sm:w-1/2 ${
                  isLeft ? 'justify-end pr-20' : 'justify-end'
                }`}
              >
                {isLeft && (
                  <div className="w-full sm:max-w-md bg-gray-900 border border-white/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(130,69,236,0.3)] hover:scale-[1.03] transition-all duration-300 mt-10">
                    {/* Top Row */}
                    <div className="flex items-center space-x-5">
                      <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={exp.img}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm text-gray-300">{exp.company}</h4>
                        <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-gray-300">{exp.desc}</p>

                    {/* Skills */}
                    <div className="mt-4">
                      <h5 className="text-white font-semibold mb-2">Skills:</h5>
                      <ul className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <li
                            key={i}
                            className="bg-[#8245ec] text-gray-200 px-3 py-1 rounded-lg text-xs border border-white/20"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* CENTER CIRCLE NODE */}
              <div className="relative w-full sm:w-0 flex items-center justify-center my-6">
                <div
                  className="
                    absolute left-1/2 transform -translate-x-1/2 -translate-y-6
                    w-12 h-12 sm:w-16 sm:h-16 rounded-full z-30
                    bg-white border-4 border-[#8245ec]
                    shadow-[0_0_25px_rgba(130,69,236,0.8)]
                    flex justify-center items-center
                  "
                >
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* RIGHT SIDE CARD */}
              <div
                className={`hidden sm:flex sm:w-1/2 ${
                  !isLeft ? 'justify-start pl-20' : 'justify-start'
                }`}
              >
                {!isLeft && (
                  <div className="w-full sm:max-w-md bg-gray-900 border border-white/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(130,69,236,0.3)] hover:scale-[1.03] transition-all duration-300 mt-10">
                    <div className="flex items-center space-x-5">
                      <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={exp.img}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm text-gray-300">{exp.company}</h4>
                        <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-300">{exp.desc}</p>

                    <div className="mt-4">
                      <h5 className="text-white font-semibold mb-2">Skills:</h5>
                      <ul className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <li
                            key={i}
                            className="bg-[#8245ec] text-gray-200 px-3 py-1 rounded-lg text-xs border border-white/20"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* MOBILE VERSION CARD */}
              <div className="sm:hidden w-full px-4 mt-20">
                <div className="bg-gray-900 border border-white/20 rounded-xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={exp.img}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg text-white font-semibold">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-gray-400">{exp.company}</p>
                      <p className="text-xs text-gray-500 mt-1">{exp.date}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-gray-300 text-sm">{exp.desc}</p>

                  <div className="mt-3">
                    <h5 className="text-white font-semibold mb-1">Skills:</h5>
                    <ul className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="bg-[#8245ec] text-gray-200 px-3 py-1 rounded-lg text-xs border border-white/20"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
