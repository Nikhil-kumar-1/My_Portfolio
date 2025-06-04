import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaPalette, FaDatabase, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = () => {
  const services = [
    {
      icon: <FaCode className="text-blue-400" size={28} />,
      title: "Frontend Development",
      description: "Beautiful, responsive interfaces with React.js, Next.js, and modern CSS frameworks like Tailwind. Pixel-perfect implementation of UI designs.",
      tags: ["React", "Next.js", "Tailwind CSS", "Redux"]
    },
    {
      icon: <FaServer className="text-purple-400" size={28} />,
      title: "Backend Development",
      description: "Robust server-side solutions with Node.js, Express, and Django. API development, authentication, and business logic implementation.",
      tags: ["Node.js", "Express", "Django", "REST APIs"]
    },
    {
      icon: <FaMobileAlt className="text-cyan-400" size={28} />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with React Native. Native-like performance with shared codebase for iOS and Android.",
      tags: ["React Native", "Expo", "Mobile UI"]
    },
    {
      icon: <FaDatabase className="text-green-400" size={28} />,
      title: "Database Design",
      description: "Efficient database architecture with both SQL and NoSQL solutions. MongoDB, PostgreSQL, and Firebase implementations.",
      tags: ["MongoDB", "PostgreSQL", "Firebase", "ORM"]
    },
    {
      icon: <FaPalette className="text-yellow-400" size={28} />,
      title: "UI/UX Design",
      description: "User-centered designs with Figma and Adobe XD. Prototyping, wireframing, and design systems for consistent experiences.",
      tags: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    {
      icon: <FaRocket className="text-red-400" size={28} />,
      title: "DevOps & Deployment",
      description: "CI/CD pipelines, Docker containers, and cloud deployments. AWS, Vercel, and Heroku configurations for scalable apps.",
      tags: ["Docker", "AWS", "CI/CD", "Vercel"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
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
              My Services
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Comprehensive solutions from concept to deployment. I build fast, scalable, and secure web applications tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              {/* Icon */}
              <motion.div 
                className="mb-6 p-4 bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-gradient-to-br from-blue-500/20 to-cyan-500/20 transition-all duration-300"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                {service.icon}
              </motion.div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs bg-gray-700/80 text-gray-300 px-3 py-1 rounded-full group-hover:bg-gray-600 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Have a project in mind? Let's discuss how I can help bring it to life!
          </p>
          <Link to="/contact"
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            Get In Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;