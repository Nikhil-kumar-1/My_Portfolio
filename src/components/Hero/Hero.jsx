import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Replace with your actual image path
  const profileImage = "Profile.png"; 

  useEffect(() => {
    // Preload image for smoother transition
    const img = new Image();
    img.src = profileImage;
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              opacity: 0
            }}
            animate={{
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
              opacity: [0, 0.1, 0],
              transition: {
                duration: Math.random() * 30 + 20,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Nikhil Kumar
                </span>
              </h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl font-medium mb-6 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'MERN Stack Specialist',
                    2000,
                    'Web Application Developer',
                    2000,
                    'Tech Enthusiast',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Crafting seamless digital experiences with clean code and innovative solutions. 
                Passionate about building efficient, scalable web applications.
              </motion.p>
              
              <motion.div
                className="flex gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Link to="/contact"
                  
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Contact Me
                </Link>
                
                <Link to="/projects"
                  href="#projects"
                  className="px-8 py-3 border border-blue-400 text-blue-400 font-medium rounded-full hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  View Work
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero image/avatar area */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated circular profile image */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-2xl shadow-cyan-500/30 flex items-center justify-center overflow-hidden"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="absolute inset-4 rounded-full overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: isImageLoaded ? 1 : 0,
                    scale: isImageLoaded ? 1 : 0.9
                  }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.4
                  }}
                >
                  {isImageLoaded ? (
                    <img 
                      src={profileImage} 
                      alt="Nikhil Kumar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">NK</span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
              
              {/* Floating tech icons around avatar */}
              {[
                { icon: '🚀', x: '10%', y: '10%', color: 'text-blue-400' },
                { icon: '💻', x: '85%', y: '15%', color: 'text-cyan-400' },
                { icon: '🔧', x: '20%', y: '80%', color: 'text-blue-300' },
                { icon: '📱', x: '75%', y: '75%', color: 'text-cyan-300' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute text-2xl ${item.color}`}
                  style={{ left: item.x, top: item.y }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-blue-400 rounded-full mt-2"
                animate={{
                  y: [0, 6, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;