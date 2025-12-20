// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png'
import kafkaLogo from './assets/tech_logo/kafka.webp'
import micoserviceLogo from './assets/tech_logo/microservice.jfif'
import hibernateLogo from './assets/tech_logo/hibernate.png'
import redisLogo from './assets/tech_logo/redis.webp'
import restAPILogo from './assets/tech_logo/restAPI.png'
import ffmpegLogo from './assets/tech_logo/FFmpeg.png'
import libvipslLogo from './assets/tech_logo/lipvips.png'
import cssLogo from './assets/tech_logo/css.png'
import javascriptLogo from './assets/tech_logo/javascript.png'
import reactjsLogo from './assets/tech_logo/reactjs.png'
import reduxLogo from './assets/tech_logo/redux.png'
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png'
import materialuiLogo from './assets/tech_logo/materialui.png'
import bootstrapLogo from './assets/tech_logo/bootstrap.png'
import springbootLogo from './assets/tech_logo/springboot.png'
import nodejsLogo from './assets/tech_logo/nodejs.png'
import expressjsLogo from './assets/tech_logo/express.png'
import mysqlLogo from './assets/tech_logo/mysql.png'
import mongodbLogo from './assets/tech_logo/mongodb.png'
import cLogo from './assets/tech_logo/c.png'
import cppLogo from './assets/tech_logo/cpp.png'
import javaLogo from './assets/tech_logo/java.png'
import gitLogo from './assets/tech_logo/git.png'
import githubLogo from './assets/tech_logo/github.png'
import postmanLogo from './assets/tech_logo/postman.png'
import figmaLogo from './assets/tech_logo/figma.png'
import netlifyLogo from './assets/tech_logo/netlify.png'
import vercelLogo from './assets/tech_logo/vercel.png'
import postgreLogo from './assets/tech_logo/postgre.png'

// Experience Section Logo's
import amazonLogo from './assets/company_logo/amazon.jpg'
import mountblueLogo from './assets/company_logo/mountblue.jfif'
import tryidolLogo from './assets/company_logo/tryidol.webp'

// Education Section Logo's
import bsebLogo from './assets/education_logo/bseb_logo.jfif'
import manuuLogo from './assets/education_logo/manuu_logo.png'

// Project Section Logo's
import chatUpLogo from './assets/work_logo/ChatUp.png'
import fitnessLogo from './assets/work_logo/fitness.png'
import moneyMateLogo from './assets/work_logo/Money-Mate.png'
import zoomLogo from './assets/work_logo/Zoom.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Microservices', logo: micoserviceLogo },
      { name: 'Kafka', logo: kafkaLogo },
      { name: 'Hibernate', logo: hibernateLogo },
      { name: 'REST APIs', logo: restAPILogo },
      { name: 'Redis', logo: redisLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'FFmpeg', logo: ffmpegLogo },
      { name: 'libvips', logo: libvipslLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
]

export const experiences = [
  {
    id: 0,
    img: amazonLogo,
    role: 'Software Engineer',
    company: 'Amazon(BCT)',
    date: 'September 2025 - Present',
    desc: 'Contributed to optimizing HFC digital order workflows across 29+ categories—including recharge, bill payments, and gift cards—reducing end-to-end processing latency by 20–25% and improving customer success rates. Enhanced fault tolerance by strengthening retry orchestration, idempotency safeguards, and real-time monitoring, increasing system reliability and reducing operational escalations by 30%.',
    skills: [
      'Java',
      'Spring Security',
      'Microservices',
      'Spring MVC',
      'Jakarta EE',
      'Spring Boot',
      'Apache Kafka',
      'MySQL',
      'ReactJS',
    ],
  },
  {
    id: 1,
    img: mountblueLogo,
    role: 'Software Engineer',
    company: 'MountBlue Technologies',
    date: 'July 2024 - August 2025',
    desc: 'Worked as a Backend Engineer, optimizing a high-traffic Spring Boot microservice by integrating Kafka and Redis for non-blocking, idempotent processing, boosting throughput by 35%. Automated media workflows with FFmpeg and libvips, cutting thumbnail generation time by 50%. Enhanced analytics by using PostgreSQL Materialized Views and Kubernetes CronJobs, improving report performance by 40%.',
    skills: [
      'Java',
      'Spring Security',
      'Microservices',
      'Spring MVC',
      'Jakarta EE',
      'Spring Boot',
      'Apache Kafka',
      'MySQL',
      'ReactJS',
      'Redis',
    ],
  },
  {
    id: 2,
    img: tryidolLogo,
    role: 'Web Developer',
    company: 'Tryidol Technologies',
    date: 'August 2023 - November 2023',
    desc: 'Worked as a Web Developer Intern using the MERN stack to develop scalable, responsive web applications. Built reusable UI components, optimized API integrations, and improved overall app performance. Collaborated with designers and backend teams to translate requirements into user-friendly features, enhancing product usability and development efficiency.',
    skills: [
      'Node.js',
      'MySQL',
      'Javascript',
      'React.js',
      'REST APIs',
      'Express.js',
      'Mongo DB',
    ],
  },
]

export const education = [
  {
    id: 0,
    img: manuuLogo,
    school: 'MANUU, Hyderabad',
    date: 'Aug 2021 - May 2024',
    grade: '8.7 CGPA',
    desc: 'I completed my Bachelor of Technology (B.Tech) in Computer Science from Maulana Azad National Urdu University (MANUU), Hyderabad. During my B.Tech at MANUU, I developed an engineering-focused approach to software development, emphasizing problem-solving, structured coding, and application design. Through academic projects and collaborative work, I gained experience in building complete applications and understanding real-world development practices.',
    degree: 'B.Tech',
  },
  {
    id: 1,
    img: manuuLogo,
    school: 'MANUU, Hyderabad',
    date: 'Aug 2018 - May 2021',
    grade: '9.7',
    desc: 'I completed my Diploma in Computer Science from Maulana Azad National Urdu University (MANUU), Hyderabad. During this program, I built a strong foundation in core computer science concepts such as programming fundamentals, data structures, database management systems, and computer networks. I also gained hands-on experience in software development through practical lab work and academic projects, which helped me understand how theoretical concepts are applied in real-world applications.',
    degree: 'Diploma',
  },
  {
    id: 2,
    img: bsebLogo,
    school: 'Rajo Singh High School, Ambari',
    date: 'May 2016 - March 2017',
    grade: '75%',
    desc: 'I completed my class 10 education from Rajo Singh High School, Ambari, under the BSEB board.',
    degree: 'SSC',
  },
]

export const projects = [
  {
    id: 0,
    title: 'ChatUp',
    description:
      'A full-stack real-time chat application developed using MongoDB, Express.js, React.js, and Node.js. It leverages WebSocket technology for instant message delivery, supports secure user authentication, and ensures efficient data storage. Designed with a responsive and user-friendly interface to provide a fast and engaging communication experience.',
    image: chatUpLogo,
    tags: ['React JS', 'Node JS', 'Express JS', 'JavaScript', 'API'],
    github: 'https://github.com/Imam-007/Real-Time-Chat-App',
    webapp: 'https://chat-up-iik1.onrender.com/',
  },
  {
    id: 1,
    title: 'Money Mate',
    description:
      'Money Mate is a full-stack personal finance management application designed to help users efficiently track incomes and expenses. It offers secure authentication, category-based organization, advanced filtering, automated Excel reports, and daily email reminders—making financial management simple and effective.',
    image: moneyMateLogo,
    tags: [
      'Spring Boot',
      'PostgreSQL',
      'Spring Security',
      'React JS',
      'Java Mail',
      'Spring Scheduler',
      'Apache POI',
      'Java',
      'Tailwind CSS',
    ],
    github: 'https://github.com/Imam-007/money-mate',
    webapp: 'https://money-mate-imam.netlify.app/',
  },
  {
    id: 2,
    title: 'Fitness App',
    description:
      'A distributed fitness application developed using microservices, featuring OAuth2-based authentication, Eureka Server for service discovery, inter-service communication, and AI-driven exercise recommendations powered by the Gemini API.',
    image: fitnessLogo,
    tags: [
      'Spring Boot',
      'Microservices',
      'MySQL',
      'React JS',
      'Java',
      'Gemini',
      'OAuth2',
    ],
    github: 'https://github.com/Imam-007/fitness-app',
    webapp: 'https://github.com/Imam-007/fitness-app',
  },
  {
    id: 3,
    title: 'Zoom Clone',
    description:
      'A Zoom-like video conferencing web application built using Spring Boot and Thymeleaf, delivering real-time video, audio, and chat capabilities. Integrated the ZEGOCLOUD SDK for low-latency video streaming along with screen sharing and participant management features. Implemented secure authentication and role-based access control using Spring Security to manage hosts and participants. Designed a responsive and optimized UI to ensure a smooth meeting experience across devices.',
    image: zoomLogo,
    tags: [
      'Spring Boot',
      'Spring Security',
      'Thymeleaf',
      'ZEGOCLOUD SDK',
      'PostgreSQL',
    ],
    github: 'https://github.com/Imam-007/Zoom-clone',
    webapp: 'https://github.com/Imam-007/Zoom-clone',
  },
]
