import React from 'react'
import { education } from '../../constants'

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[3px] bg-white/20 h-full"></div>

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0

          return (
            <div
              key={edu.id}
              className="relative w-full flex flex-col sm:flex-row items-center mb-24"
            >
              <div
                className={`hidden sm:flex sm:w-1/2 ${
                  isLeft ? 'justify-end pr-20' : ''
                }`}
              >
                {isLeft && <EducationCard edu={edu} />}
              </div>

              <div className="relative w-full sm:w-0 flex items-center justify-center my-6">
                <div
                  className="
                  absolute left-1/2 transform -translate-x-1/2 -translate-y-6
                  w-14 h-14 rounded-full z-30
                  bg-white border-4 border-[#8245ec]
                  shadow-[0_0_25px_rgba(130,69,236,0.8)]
                  flex justify-center items-center
                "
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <div
                className={`hidden sm:flex sm:w-1/2 ${
                  !isLeft ? 'justify-start pl-20' : ''
                }`}
              >
                {!isLeft && <EducationCard edu={edu} />}
              </div>

              <div className="sm:hidden w-full px-4 mt-20">
                <EducationCard edu={edu} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const EducationCard = ({ edu }) => (
  <div className="w-full sm:max-w-md bg-gray-900 border border-white/20 rounded-2xl p-8 shadow-[0_0_30px_rgba(130,69,236,0.3)] hover:scale-[1.03] transition-all duration-300">
    <div className="flex items-center space-x-5">
      <div className="w-16 h-16 bg-white rounded-xl overflow-hidden">
        <img
          src={edu.img}
          alt={edu.school}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
        <p className="text-sm text-gray-300">{edu.school}</p>
        <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
      </div>
    </div>

    <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
    <p className="mt-3 text-gray-300">{edu.desc}</p>
  </div>
)

export default Education
