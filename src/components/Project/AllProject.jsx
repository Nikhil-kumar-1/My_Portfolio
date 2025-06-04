import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

const AllProjects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Digital Marketing Hub",
      description:
        "A cutting-edge digital marketing platform with interactive analytics dashboards, client management systems, and campaign performance tracking. Built with modern animations for an engaging user experience.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "Digital.png",
      github: "https://github.com/Nikhil-kumar-1",
      live: "https://marketing-five-phi.vercel.app",
    },
    {
      id: 2,
      title: "EventSync Pro",
      description:
        "Comprehensive event management solution featuring real-time collaboration, automated scheduling, and integrated payment processing. Reduces event planning time by 40% with intuitive drag-and-drop interfaces.",
      tags: ["React", "Firebase", "Tailwind CSS", "Drag-n-Drop"],
      image: "Event.png",
      github: "https://github.com/Nikhil-kumar-1",
      live: "https://event-indol-five.vercel.app/",
    },
    {
      id: 3,
      title: "EduTrack Dashboard",
      description:
        "Advanced analytics dashboard for educational institutions with student performance tracking, automated report generation, and predictive analysis for at-risk students using machine learning models.",
      tags: ["Next.js", "TypeScript", "Chart.js", "AWS"],
      image: "Coaching.png",
      github: "https://github.com/Nikhil-kumar-1",
      live: "https://truedreamsclasses.com/",
    },
    {
      id: 4,
      title: "MechanicOnDemand",
      description:
        "On-demand automotive service platform with geolocation tracking, real-time mechanic availability, and AI-powered diagnostic tools. Features dark mode and seamless booking flow with 95% customer satisfaction.",
      tags: ["React", "Framer Motion", "Tailwind CSS", "GSAP"],
      image: "Mechanics.png",
      github: "https://github.com/Nikhil-kumar-1",
      live: "https://car-seven-mu.vercel.app/",
    },
    {
      id: 5,
      title: "HealthConnect Pro",
      description:
        "Telemedicine platform with video consultation, prescription management, and health record integration. Reduced patient wait times by 75% with intelligent scheduling algorithms and secure JWT authentication.",
      tags: ["MERN Stack", "JWT Auth", "ExpressJS", "MongoDB"],
      image: "Doctor.png",
      github: "https://github.com/Nikhil-kumar-1",
      live: "https://doctor-kunjan.vercel.app/",
    },
    {
      id: 6,
      title: "Luxury Jewelry Gallery",
      description:
        "High-end e-commerce platform featuring 3D product visualization, AR try-on capabilities, and personalized recommendations. Increased conversion rates by 30% with immersive product displays.",
      tags: ["React Native", "Expo", "Styled Components", "3D Modeling"],
      image: "Jewellery.png",
      github: "https://github.com/Nikhil-kumar-1",
      live: "https://jewellery-admin-eta.vercel.app/",
    },
  ];

  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    if (url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverEffect = {
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              My Portfolio
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Each project represents a unique challenge solved with innovative
            solutions. From sleek UIs to complex backend systems, I've crafted
            digital experiences that deliver real business value.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative overflow-hidden bg-gray-800/50 border border-gray-700 rounded-2xl hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={hoverEffect}
            >
              {/* Project Image */}
              <div className="h-52 overflow-hidden relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{
                    scale: hoveredProject === project.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90 z-10 pointer-events-none" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => handleLinkClick(e, project.github)}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub repository"
                    >
                      <FiGithub size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => handleLinkClick(e, project.live)}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Live demo"
                    >
                      <FiExternalLink size={18} />
                    </motion.button>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors min-h-[72px]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="text-xs bg-gray-700/80 text-gray-300 px-3 py-1 rounded-full group-hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              {hoveredProject === project.id && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-md" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center px-8 py-3.5 border border-cyan-400 text-cyan-400 font-medium rounded-full hover:bg-cyan-400/10 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ y: -3 }}
          >
            <span className="relative z-10">Explore More Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-3 relative z-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AllProjects;