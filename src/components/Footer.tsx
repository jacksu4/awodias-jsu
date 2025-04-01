
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-heading font-bold">Jingcheng Su</h3>
            <p className="text-gray-400 mt-2">Software Engineer & Investor</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/jingchengsu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:sujingcheng1105@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Jingcheng Su. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex gap-6 text-sm">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
