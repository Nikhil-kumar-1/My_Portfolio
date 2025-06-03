import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Digital Marketing Website",
      description:
        "A professional website showcasing digital marketing services, achievements, testimonials, and team details with smooth animations and a parallax effect.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "Digital.png",
      github: "https://github.com/Nikhil-kumar-1",
      live: "https://marketing-five-phi.vercel.app",
    },
    {
      id: 2,
      title: "Event Management System",
      description:
        "A full-stack platform for creating and managing events with features like schedule planning, registration, team collaboration, and drag-and-drop task management.",
      tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
      image: "Event.png",
      github: "https://github.com/Nikhil-kumar-1",
      live: "https://event-indol-five.vercel.app/",
    },
    {
      id: 3,
      title: "Coaching Institute Admin Panel",
      description:
        "An admin dashboard for managing coaching institutes, enabling student management, performance tracking, fee analytics, and real-time charts.",
      tags: ["Next.js", "TypeScript", "Chart.js", "AWS"],
      image: "Coaching.png",
      github: "https://github.com/Nikhil-kumar-1",
      live: "https://truedreamsclasses.com/",
    },
    {
      id: 4,
      title: "City Mechanics Booking Platform",
      description:
        "A responsive platform for booking mechanics in urban areas with location-based services, real-time availability, and dark mode support.",
      tags: ["React", "Framer Motion", "Tailwind CSS", "GSAP"],
      image: "Mechanics.png",
      github: "https://github.com/Nikhil-kumar-1",
      live: "https://car-seven-mu.vercel.app/",
    },
    {
      id: 5,
      title: "Doctor Website",
      description:
        "A modern doctor appointment booking website with features like doctor profiles, appointment scheduling, and patient management using JWT authentication.",
      tags: ["MERN Stack", "JWT Auth", "ExpressJS", "MongoDB"],
      image: "Doctor.png",
      github: "https://github.com/Nikhil-kumar-1",
      live: "https://doctor-kunjan.vercel.app/",
    },
    {
      id: 6,
      title: "Jewellery Store Frontend",
      description:
        "A modern website for showcasing jewellery collections with features like catalog browsing, product filtering, and mobile responsiveness.",
      tags: ["React Native", "Expo", "Styled Components", "Navigation"],
      image: "Jewellery.png",
      github: "https://github.com/Nikhil-kumar-1",
      live: "https://jewellery-admin-eta.vercel.app/",
    },
  ];

  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    console.log(`Opening link: ${url}`);
    if (url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Here are some of my selected works. Each project was carefully
            crafted to solve specific problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 z-10 pointer-events-none"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 z-100">
                    <button
                      onClick={(e) => handleLinkClick(e, project.github)}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      aria-label="GitHub repository"
                    >
                      <FiGithub size={18} />
                    </button>
                    <button
                      onClick={(e) => handleLinkClick(e, project.live)}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      aria-label="GitHub repository"
                    >
                     <FiExternalLink size={18} />
                    </button>
                    
                  </div>
                </div>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full group-hover:bg-gray-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overlay for active project */}
              {activeProject === project.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-medium rounded-full hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
