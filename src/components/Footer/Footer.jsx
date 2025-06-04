import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail,
  FiPhone,
  FiMapPin
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Quick Links",
      items: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Services",
      items: [
        { name: "Web Development", path: "/services" },
        { name: "App Development", path: "/services" },
        { name: "UI/UX Design", path: "/services" },
        { name: "Backend Solutions", path: "/services" },
        { name: "Consulting", path: "/services" }
      ]
    },
    {
      title: "Contact Info",
      items: [
        { 
          icon: <FiMail className="mr-2" />, 
          text: "nik629920@gmail.com",
          href: "mailto:nik629920@gmail.com"
        },
        { 
          icon: <FiPhone className="mr-2" />, 
          text: "+91 **********",
          href: "tel:+91**********"
        },
        { 
          icon: <FiMapPin className="mr-2" />, 
          text: "New Delhi, India"
        }
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: <FiGithub />, 
      href: "https://github.com/Nikhil-kumar-1", 
      name: "GitHub" 
    },
    { 
      icon: <FiLinkedin />, 
      href: "https://www.linkedin.com/in/nikhil-kumar-9b15b31b6/", 
      name: "LinkedIn" 
    },
    { 
      icon: <FiTwitter />, 
      href: "#", 
      name: "Twitter" 
    },
    { 
      icon: <FiMail />, 
      href: "mailto:nik629920@gmail.com", 
      name: "Email" 
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex flex-col group mb-4"
            >
              <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                {'<NikhilKumar />'}
              </Link>
              <span className="text-sm text-gray-400">Full Stack Developer</span>
            </motion.div>
            <p className="text-gray-400 mb-6">
              Creating exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 text-xl transition-colors"
                  whileHover={{ y: -3 }}
                  title={social.name}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {links.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mt-4 md:mt-0"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.path ? (
                      <Link 
                        to={item.path}
                        className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {item.icon || null}
                        {item.name || item.text}
                      </Link>
                    ) : (
                      <a 
                        href={item.href || '#'} 
                        className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {item.icon || null}
                        {item.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Nikhil Kumar. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;