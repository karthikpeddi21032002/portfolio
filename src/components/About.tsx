import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { personalInfo, education } from "@/data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating efficient, scalable solutions and exploring the intersection of traditional software engineering with cutting-edge AI technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Personal Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get to Know Me</h3>
              
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a Software Engineer at <strong className="text-foreground">Ultimate Kronos Group</strong>, where I've spent the last 1.6 years building robust microservices and AI-powered solutions that serve millions of users worldwide.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My journey in tech is driven by a passion for solving complex problems through elegant code. I specialize in <strong className="text-foreground">Java-SpringBoot ecosystems</strong>, with deep expertise in microservices architecture, observability tooling, and most recently, integrating <strong className="text-foreground">Large Language Models</strong> into production systems.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new AI/ML frameworks, contributing to open-source projects, or solving algorithmic challenges on competitive programming platforms.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Education & Achievements</h3>
              
              {/* Education Cards */}
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.id} className="border-border hover:border-tech/50 transition-colors duration-300 glass-card">
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-4">
                        {/* College Logo and Info */}
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="p-2 bg-tech/10 rounded-lg flex-shrink-0">
                            {edu.logo ? (
                              <img 
                                src={edu.logo} 
                                alt={`${edu.institution} Logo`} 
                                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                              />
                            ) : null}
                            <GraduationCap className={`h-10 w-10 sm:h-12 sm:w-12 text-tech ${edu.logo ? 'hidden' : ''}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{edu.degree}</h4>
                            <p className="text-muted-foreground mb-2 text-sm">{edu.institution}</p>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{edu.duration}</span>
                              </div>
                              {edu.cgpa && (
                                <div className="flex items-center space-x-1">
                                  <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                                  <span>CGPA: {edu.cgpa}</span>
                                </div>
                              )}
                              {edu.percentage && (
                                <div className="flex items-center space-x-1">
                                  <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                                  <span>{edu.percentage}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Graduation Photo */}
                        {edu.photo && (
                          <div className="mt-4 rounded-lg overflow-hidden">
                            <img 
                              src={edu.photo} 
                              alt={`Graduation at ${edu.institution}`} 
                              className="w-full h-40 sm:h-48 object-cover rounded-lg"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Key Achievements</h4>
                <div className="grid gap-3">
                  <div className="flex items-center space-x-3 p-3 glass-card rounded-lg border border-border/50">
                    <Badge variant="secondary" className="text-tech border-tech/20 flex-shrink-0">★</Badge>
                    <span className="text-xs sm:text-sm">5★ Coder at HackerRank</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 glass-card rounded-lg border border-border/50">
                    <Badge variant="secondary" className="text-tech border-tech/20 flex-shrink-0">🏆</Badge>
                    <span className="text-xs sm:text-sm">LeetCode Rating: 1800</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 glass-card rounded-lg border border-border/50">
                    <Badge variant="secondary" className="text-tech border-tech/20 flex-shrink-0">🥇</Badge>
                    <span className="text-xs sm:text-sm">CodeChef Rating: 1652</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 glass-card rounded-lg border border-border/50">
                    <Badge variant="secondary" className="text-tech border-tech/20 flex-shrink-0">🚀</Badge>
                    <span className="text-xs sm:text-sm">Techgium Hackathon Semifinalist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;