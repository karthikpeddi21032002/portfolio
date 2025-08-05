import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card border-b border-border/50' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl font-bold gradient-text">
              {personalInfo.name}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-all duration-200 text-sm font-medium hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:scale-110 transition-all">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:scale-110 transition-all">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:scale-110 transition-all">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            {personalInfo.medium && (
              <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:scale-110 transition-all">
                <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card rounded-lg mt-2 border border-border/50">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                {personalInfo.medium && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;