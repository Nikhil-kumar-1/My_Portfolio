import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaPaintBrush, FaSearchDollar, FaRobot } from 'react-icons/fa';

const AllServices = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    {
      icon: <FaCode className="text-3xl text-blue-400" />,
      title: "Web Development",
      description: "Custom, responsive websites built with modern technologies like React, Next.js, and Tailwind CSS.",
      color: "from-blue-500/10 to-blue-800/10"
    },
    {
      icon: <FaMobileAlt className="text-3xl text-purple-400" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps using React Native for both iOS and Android platforms.",
      color: "from-purple-500/10 to-purple-800/10"
    },
    {
      icon: <FaServer className="text-3xl text-green-400" />,
      title: "Backend Development",
      description: "Robust backend systems with Node.js, Express, MongoDB, and PostgreSQL.",
      color: "from-green-500/10 to-green-800/10"
    },
    {
      icon: <FaPaintBrush className="text-3xl text-yellow-400" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces with Figma and Adobe XD, focused on user experience.",
      color: "from-yellow-500/10 to-yellow-800/10"
    },
    {
      icon: <FaSearchDollar className="text-3xl text-red-400" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and online visibility with proven SEO strategies.",
      color: "from-red-500/10 to-red-800/10"
    },
    {
      icon: <FaRobot className="text-3xl text-indigo-400" />,
      title: "AI Integration",
      description: "Enhance your applications with AI features like chatbots and recommendation systems.",
      color: "from-indigo-500/10 to-indigo-800/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs, delivered with cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gray-800 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AllServices;