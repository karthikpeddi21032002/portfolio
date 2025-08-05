import { Github, Linkedin, Mail, FileText, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-primary border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Software Engineer passionate about building scalable systems and AI-powered solutions. 
                Always exploring the intersection of traditional software engineering with cutting-edge AI technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
                  About
                </a>
                <a href="#experience" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
                  Experience
                </a>
                <a href="#projects" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
                  Projects
                </a>
                <a href="#skills" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
                  Skills
                </a>
                <a href="#blog" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
                  Blog
                </a>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
                  Contact
                </a>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 text-white transition-all duration-200"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 text-white transition-all duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 text-white transition-all duration-200"
                >
                  <Mail className="h-5 w-5" />
                </a>
                {personalInfo.medium && (
                  <a 
                    href={personalInfo.medium} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 text-white transition-all duration-200"
                  >
                    <FileText className="h-5 w-5" />
                  </a>
                )}
              </div>
              <p className="text-white/70 text-sm">
                Available for new opportunities and collaborations
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/70 text-sm">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-sm text-white/70">
                <span>Built with</span>
                <Heart className="h-4 w-4 text-red-300 fill-current" />
                <span>using React, TypeScript & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;