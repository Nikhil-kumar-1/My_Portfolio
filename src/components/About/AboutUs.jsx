import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaSchool, FaUniversity, FaTools, FaAward, FaLaptopCode, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { GiSkills } from 'react-icons/gi';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const education = [
    {
      icon: <FaUniversity className="text-blue-400 text-xl" />,
      degree: "Bachelor of Technology (Computer Science)",
      institution: "Lovely Professional University, Punjab",
      period: "2020-2024",
      score: "CGPA: 7.5/10",
      highlights: [
        "Specialized in Web Technologies",
        "Final Year Project: AI-based Recommendation System, Job Seeker"
      ]
    },
    {
      icon: <FaGraduationCap className="text-blue-400 text-xl" />,
      degree: "Class XII (Science - PCM)",
      institution: "Cambridge Public School, Patna",
      period: "2018-2019",
      score: "Percentage: 75%",
      highlights: [
        
      ]
    },
    {
      icon: <FaSchool className="text-blue-400 text-xl" />,
      degree: "Class X",
      institution: "Patna St. Michel School, Patna",
      period: "2016-2017",
      score: "Percentage: 95%",
      highlights: [
        "In School Awarded Best Project in Science Fair",
        
      ]
    }
  ];

  const skills = {
    technical: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'HTML5/CSS3', 'Git/GitHub', 'AWS', 'Docker', 'Python', 'TypeScript'],
    soft: ['Problem Solving', 'Team Leadership', 'Communication', 'Time Management', 'Adaptability', 'Creativity']
  };

  return (
    <>
      {/* Hero Section */}
      <section className="overflow-x-hidden relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70"></div>
          <img 
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" // Replace with your background image
            alt="Developer Background"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-blue-400">Nikhil</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              Full Stack Developer
            </h2>
            <motion.div 
              className="w-24 h-1 bg-blue-500 mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              I build modern, responsive web applications with cutting-edge technologies and clean code architecture.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="#about"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="https://github.com/Nikhil-kumar-1" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nikhil-kumar-9b15b31b6/" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nikhil-kumar-9b15b31b6/" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate Full Stack Developer with expertise in modern web technologies and a knack for solving complex problems with elegant solutions.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column */}
            <div className="lg:w-1/2 space-y-8">
              {/* Introduction Card */}
              <motion.div 
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-lg"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <FaLaptopCode className="text-blue-400 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Who Am I?</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I'm Nikhil, a dedicated Full Stack Developer with 1 year of experience building web applications. 
                  I specialize in the MERN stack and have a strong foundation in computer science principles.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I enjoy creating practical solutions to real-world problems through my projects and continuously 
                  expanding my technical knowledge through hands-on experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <IoIosRocket />
                    <span>10+ Projects Completed</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <FaAward />
                    <span>Built Practical Applications</span>
                  </div>
                </div>
              </motion.div>

              {/* Skills Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <GiSkills className="text-blue-400 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold">My Skills</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-lg mb-3 flex items-center gap-2">
                    <FaTools className="text-blue-400" />
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.technical.map((skill, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="text-sm bg-gray-700 hover:bg-blue-500/30 px-4 py-2 rounded-full border border-gray-600"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-3 flex items-center gap-2">
                    <FaTools className="text-blue-400" />
                    Soft Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.soft.map((skill, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="text-sm bg-gray-700 hover:bg-blue-500/30 px-4 py-2 rounded-full border border-gray-600"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 space-y-8">
              {/* Education Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-lg"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <FaGraduationCap className="text-blue-400 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                <motion.div 
                  className="space-y-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {education.map((edu, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-4 relative pb-6 last:pb-0"
                    >
                      <div className="flex flex-col items-center">
                        <div className="p-2 bg-gray-700 rounded-full z-10">
                          {edu.icon}
                        </div>
                        {index !== education.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-600 absolute top-8 left-6"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-blue-400">{edu.degree}</h4>
                        <p className="text-gray-300">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mb-2">{edu.period} • {edu.score}</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm pl-1">
                          {edu.highlights.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Experience/Projects Preview */}
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <FaCode className="text-blue-400 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Professional Journey</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-blue-400 text-xl mt-1">
                      <IoIosRocket />
                    </div>
                    <div>
                      <h4 className="font-bold">Internship @NIELIT (Government Organization)</h4>
                      <p className="text-gray-400 text-sm mb-2">June 2024 - December 2024</p>
                      <p className="text-gray-300 text-sm">
                        Gained hands-on experience with web development technologies.
                        Worked on real-world projects under government supervision.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-blue-400 text-xl mt-1">
                      <IoIosRocket />
                    </div>
                    <div>
                      <h4 className="font-bold">Full Stack Developer @Adonomics Technologies</h4>
                      <p className="text-gray-400 text-sm mb-2">Feb 2025 - Present</p>
                      <p className="text-gray-300 text-sm">
                        Developing and maintaining web applications using MERN stack.
                        Implementing responsive designs and optimizing application performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="text-blue-400 text-xl mt-1">
                      <FaCode />
                    </div>
                    <div>
                      <h4 className="font-bold">Freelance Project</h4>
                      <p className="text-gray-400 text-sm mb-2">2023</p>
                      <p className="text-gray-300 text-sm">
                        Developed a matrimonial website for a client with user profiles,
                        search functionality, and matching algorithms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="text-blue-400 text-xl mt-1">
                      <FaAward />
                    </div>
                    <div>
                      <h4 className="font-bold">Personal Projects</h4>
                      <p className="text-gray-400 text-sm mb-2">2022 - Present</p>
                      <p className="text-gray-300 text-sm">
                        Built multiple practical applications including e-commerce platforms,
                        task management systems, and portfolio websites to showcase skills.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default About;