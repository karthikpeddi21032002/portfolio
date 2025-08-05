import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building2, Zap } from "lucide-react";
import { experience } from "@/data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-20 section-bg-green">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building scalable solutions and leading innovative projects in enterprise software development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={exp.id} className="relative overflow-hidden border-border hover:border-tech/50 transition-all duration-300 hover:shadow-xl">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-tech"></div>
                
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold text-foreground flex items-center space-x-2">
                        <Building2 className="h-5 w-5 text-tech" />
                        <span>{exp.position}</span>
                      </CardTitle>
                      <p className="text-lg font-semibold text-tech">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-col md:items-end space-y-2">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <div className="space-y-4">
                    {exp.description.map((desc, descIndex) => (
                      <div key={descIndex} className="flex items-start space-x-3">
                        <div className="p-1 bg-tech/20 rounded-full mt-1.5">
                          <Zap className="h-3 w-3 text-tech" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed flex-1">{desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs px-3 py-1 bg-tech/10 text-tech border-tech/20 hover:bg-tech/20 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="mt-16 p-8 gradient-secondary rounded-xl border border-tech/20">
            <h3 className="text-xl font-semibold mb-6 text-center text-white">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center text-white">
                <div className="text-3xl font-bold mb-2">250M+</div>
                <p className="text-sm text-white/80">Users Successfully Migrated</p>
              </div>
              <div className="text-center text-white">
                <div className="text-3xl font-bold mb-2">60%</div>
                <p className="text-sm text-white/80">API Performance Improvement</p>
              </div>
              <div className="text-center text-white">
                <div className="text-3xl font-bold mb-2">1000min</div>
                <p className="text-sm text-white/80">Migration Time (vs 4 months)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;