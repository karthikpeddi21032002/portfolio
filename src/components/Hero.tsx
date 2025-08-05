import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    if (personalInfo.resumeUrl) {
      window.open(personalInfo.resumeUrl, '_blank');
    }
  };

  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
              {/* Status Badge */}
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium glass-card border-success/30 text-success backdrop-blur-md">
                <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
                Available for new opportunities
              </Badge>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block gradient-text">{personalInfo.name}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
                {personalInfo.title}
              </p>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Software Engineer with <span className="text-tech font-semibold">1.6 years</span> of hands-on experience in 
                <span className="text-foreground font-semibold"> Java-SpringBoot microservices</span>, 
                <span className="text-foreground font-semibold"> AI-powered solutions</span>, and 
                <span className="text-foreground font-semibold"> observability tooling</span>. 
                Passionate about building scalable systems and leveraging LLMs to solve complex problems.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-6 text-lg font-semibold gradient-primary text-white glow-effect hover:scale-105 transition-all duration-300"
                  onClick={handleViewWork}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 gradient-border glass-card"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                <div className="text-center lg:text-left glass-card p-3 sm:p-4 rounded-lg backdrop-blur-md">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text-green mb-1">250M+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Users Migrated</div>
                </div>
                <div className="text-center lg:text-left glass-card p-3 sm:p-4 rounded-lg backdrop-blur-md">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-1">60%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Performance Boost</div>
                </div>
                <div className="text-center lg:text-left glass-card p-3 sm:p-4 rounded-lg backdrop-blur-md">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-1">900+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">DSA Solved</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end mt-20 lg:mt-0">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden profile-image transform hover:scale-105 transition-all duration-300">
                  <img 
                    src="/lovable-uploads/2d1bc9fc-fda5-4e37-89fb-49229de60f84.png" 
                    alt="Karthik Peddi - Software Engineer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 gradient-primary rounded-full animate-float opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 gradient-secondary rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 gradient-warning rounded-full animate-float opacity-60" style={{ animationDelay: '4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center glass-card">
          <div className="w-1 h-3 gradient-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;