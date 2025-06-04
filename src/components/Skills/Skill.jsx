import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaAws, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiDocker, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-2xl text-blue-400" />,
      skills: [
        { name: "React", icon: <FaReact className="text-xl" />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript className="text-xl text-yellow-400" />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript className="text-xl text-blue-500" />, level: 80 },
        { name: "HTML/CSS", icon: <div className="text-xl">📄</div>, level: 95 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl text-cyan-400" />, level: 90 }
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-2xl text-green-500" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-xl text-green-500" />, level: 85 },
        { name: "Express", icon: <SiExpress className="text-xl" />, level: 80 },
        { name: "Python", icon: <FaPython className="text-xl text-blue-600" />, level: 75 }
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-2xl text-orange-400" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-xl text-green-600" />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-xl text-blue-700" />, level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <FaGitAlt className="text-2xl text-red-500" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-xl text-red-500" />, level: 90 },
        { name: "AWS", icon: <FaAws className="text-xl text-orange-500" />, level: 70 },
        { name: "Docker", icon: <SiDocker className="text-xl text-blue-400" />, level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies I've worked with and my proficiency level in each.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-700 rounded-full">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-300">{skill.icon}</div>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-blue-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;