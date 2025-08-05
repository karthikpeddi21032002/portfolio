import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: "Drop me a line for opportunities or collaborations"
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: "Available for calls during business hours"
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      description: "Based in Noida, open to remote opportunities"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: personalInfo.github,
      description: "View my open source contributions"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personalInfo.linkedin,
      description: "Connect with me professionally"
    },
    {
      icon: FileText,
      label: "Medium",
      href: personalInfo.medium || "#",
      description: "Read my technical articles"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Always open to discussing new opportunities, innovative projects, or just having a conversation about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Get in Touch</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  I'm currently looking for new opportunities to apply my expertise in building scalable systems and AI-powered solutions. 
                  Whether you're interested in my experience with microservices, AI integration, or have an exciting project in mind, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card key={index} className="glass-card border-border/50 hover:border-tech/50 transition-colors duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="p-2 sm:p-3 bg-tech/10 rounded-lg flex-shrink-0">
                            <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-tech" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{method.label}</h4>
                            <p className="text-muted-foreground text-xs sm:text-sm mb-2">{method.description}</p>
                            {method.href && method.href !== "#" ? (
                              <a 
                                href={method.href}
                                className="text-tech hover:text-tech/80 transition-colors duration-200 font-medium text-sm sm:text-base break-all"
                              >
                                {method.value}
                              </a>
                            ) : (
                              <span className="text-foreground font-medium text-sm sm:text-base">{method.value}</span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Links & CTA */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Connect Online</h3>
                <div className="space-y-3 sm:space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Card key={index} className="glass-card border-border/50 hover:border-tech/50 transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                              <div className="p-2 sm:p-3 bg-tech/10 rounded-lg flex-shrink-0">
                                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-tech" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h4 className="font-semibold text-foreground text-sm sm:text-base">{social.label}</h4>
                                <p className="text-muted-foreground text-xs sm:text-sm truncate">{social.description}</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" asChild className="flex-shrink-0">
                              <a href={social.href} target="_blank" rel="noopener noreferrer">
                                <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Quick Action */}
              <Card className="glass-card bg-gradient-to-br from-primary/10 to-tech/10 border-primary/20">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center text-lg sm:text-xl">Ready to Start a Conversation?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 px-4 sm:px-6">
                  <p className="text-center text-muted-foreground text-xs sm:text-sm">
                    Send me an email and I'll get back to you within 24 hours
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full gradient-primary text-white glow-effect hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                    asChild
                  >
                    <a href={`mailto:${personalInfo.email}?subject=Let's Connect - Opportunity Discussion`}>
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;