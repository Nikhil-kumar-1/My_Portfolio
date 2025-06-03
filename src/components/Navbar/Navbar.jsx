import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', delay: '100' },
    { name: 'About', path: '/about', delay: '150' },
    { name: 'Skills', path: '/skills', delay: '200' },
    { name: 'Projects', path: '/projects', delay: '250' },
    { name: 'Services', path: '/services', delay: '300' },
    { name: 'Contact', path: '/contact', delay: '350' },
  ];

  const techIcons = [
    { icon: <FaReact size={20} className="text-cyan-400" />, name: 'React' },
    { icon: <SiJavascript size={20} className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <SiTypescript size={20} className="text-blue-500" />, name: 'TypeScript' },
    { icon: <FaNodeJs size={20} className="text-green-500" />, name: 'Node.js' },
    { icon: <SiExpress size={20} className="text-gray-100" />, name: 'Express' },
    { icon: <SiMongodb size={20} className="text-green-600" />, name: 'MongoDB' },
    { icon: <FaPython size={20} className="text-blue-500" />, name: 'Python' },
    { icon: <SiTailwindcss size={20} className="text-cyan-300" />, name: 'Tailwind' },
  ];

  const socialIcons = [
    { icon: <FiGithub size={20} />, href: '#', color: 'hover:text-gray-400' },
    { icon: <FiLinkedin size={20} />, href: '#', color: 'hover:text-blue-500' },
    { icon: <FiTwitter size={20} />, href: '#', color: 'hover:text-sky-400' },
    { icon: <FiMail size={20} />, href: '#contact', color: 'hover:text-red-400' },
  ];

  const handleHashLinkClick = (path) => {
    if (path.includes('#')) {
      const hash = path.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-xl' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex flex-col group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 group-hover:bg-gradient-to-l transition-all duration-500">
            {'<Nikhil Kumar />'}
          </Link>
          <span className="text-xs text-gray-400">Full Stack Developer</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item, index) => (
            item.path.includes('#') ? (
              <motion.a
                key={index}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleHashLinkClick(item.path);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300">
                  {item.name}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 origin-center"></span>
              </motion.a>
            ) : (
              <Link to={item.path} key={index}>
                <motion.div
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300">
                    {item.name}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 origin-center"></span>
                </motion.div>
              </Link>
            )
          ))}
          
          {/* Tech stack icons */}
          <motion.div 
            className="ml-4 flex gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
          >
            {techIcons.map((tech, index) => (
              <motion.div 
                key={index} 
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-500/20 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={tech.name}
              >
                {tech.icon}
              </motion.div>
            ))}
          </motion.div>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden p-2 rounded-md text-gray-200 hover:text-blue-400 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <motion.div 
          className="md:hidden absolute w-full bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              item.path.includes('#') ? (
                <motion.a
                  key={index}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleHashLinkClick(item.path);
                  }}
                  className="px-4 py-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500 rounded-lg transition-all duration-300 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ) : (
                <Link to={item.path} key={index}>
                  <motion.div
                    className="px-4 py-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500 rounded-lg transition-all duration-300 font-medium"
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              )
            ))}
            
            <motion.div 
              className="pt-6 flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-300 ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            <div className="pt-6 flex flex-wrap justify-center gap-3">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  className="p-3 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={tech.name}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;