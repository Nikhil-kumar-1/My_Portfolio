import { motion } from 'framer-motion';
import { FaLaptopCode, FaUniversity, FaBriefcase, FaCode, FaServer } from 'react-icons/fa';
import { MdWorkOutline, MdSchool } from 'react-icons/md';
import { SiTypescript, SiNextdotjs, SiNodedotjs, SiMongodb } from 'react-icons/si';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const techIcons = [
    { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              About Me
            </span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"
            whileHover={{ scaleX: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Passionate Full Stack Developer with expertise in modern web technologies, dedicated to crafting performant, accessible, and visually stunning digital experiences.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center relative"
          >
            <motion.div 
              className="relative"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-4 shadow-lg">
                <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden border-4 border-gray-800 relative">
                  <img 
                    src="profile.jpeg" // Replace with your image path
                    alt="Nikhil"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Floating tech icons around the image */}
                  
                </div>
              </div>
              <motion.div 
                className="absolute -bottom-3 -right-1 bg-gray-800 rounded-lg px-4 py-2 shadow-lg border border-gray-700 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for work</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Experience Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3"
          >
            <motion.h3 
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300"
            >
              My <span className="text-blue-400">Professional Journey</span>
            </motion.h3>

            {/* Experience timeline */}
            <div className="relative">
              {/* Animated timeline line */}
              <motion.div 
                className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500/30 via-cyan-500 to-cyan-500/30"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />

              {/* Timeline items */}
              <div className="space-y-8">
                {/* Current job */}
                <motion.div
                  variants={fadeInUp}
                  className="relative pl-12 group"
                >
                  <motion.div 
                    className="absolute left-0 top-1 w-12 h-12 rounded-full bg-gray-800 border-2 border-blue-400 flex items-center justify-center text-blue-400 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <MdWorkOutline size={20} />
                  </motion.div>
                  <motion.div 
                    className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-400/10"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-medium text-white">Full Stack Developer</h4>
                      <span className="text-sm bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full">
                        Feb 2025 - Present
                      </span>
                    </div>
                    <h5 className="text-blue-400 mb-3">Adonomics Technologies</h5>
                    <p className="text-gray-400 mb-4">
                      Leading the development of scalable web applications using cutting-edge technologies. 
                      Architecting solutions that handle 10,000+ daily active users with 99.9% uptime.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Microservices'].map((tech, i) => (
                        <motion.span 
                          key={i}
                          className="text-xs bg-gray-700 px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                          style={{ color: i % 2 === 0 ? '#93c5fd' : '#86efac' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Internship */}
                <motion.div
                  variants={fadeInUp}
                  className="relative pl-12 group"
                >
                  <motion.div 
                    className="absolute left-0 top-1 w-12 h-12 rounded-full bg-gray-800 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                  >
                    <FaUniversity size={18} />
                  </motion.div>
                  <motion.div 
                    className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/10"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-medium text-white">Software Development Intern</h4>
                      <span className="text-sm bg-cyan-900/40 text-cyan-300 px-3 py-1 rounded-full">
                        Jun 2024 - Dec 2024
                      </span>
                    </div>
                    <h5 className="text-cyan-400 mb-3">NIELIT (Govt. Organization)</h5>
                    <p className="text-gray-400 mb-4">
                      Developed critical components for government digital initiatives. 
                      Optimized existing systems leading to 40% performance improvement.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'Python', 'Django', 'PostgreSQL', 'Linux'].map((tech, i) => (
                        <motion.span 
                          key={i}
                          className="text-xs bg-gray-700 px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                          style={{ color: i % 2 === 0 ? '#67e8f9' : '#a5b4fc' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Skills Section */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm"
            >
              <motion.h4 
                className="text-xl font-medium text-white mb-6 flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <FaLaptopCode className="text-blue-400 animate-pulse" />
                <span>Technical Expertise</span>
              </motion.h4>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  'React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express',
                  'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'AWS',
                  'Docker', 'Kubernetes', 'Microservices', 'Jest', 'Cypress',
                  'Tailwind CSS', 'Material UI', 'Framer Motion', 'Git', 'CI/CD'
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 bg-gray-700/50 px-3 py-2 rounded-lg border border-gray-600 hover:border-blue-400 transition-colors"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(30, 64, 175, 0.3)'
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;