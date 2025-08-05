import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Lightbulb } from "lucide-react";
import { projects } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions showcasing expertise in AI, microservices, and full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group relative overflow-hidden glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02]"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 gradient-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                    <div className="text-3xl font-bold text-white">{project.title}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="glass-card text-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.date}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4 px-4 sm:px-6">
                  <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                  {/* Key Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center space-x-2">
                      <Lightbulb className="h-4 w-4 text-tech" />
                      <span>Key Features</span>
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-tech rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs px-2 py-1 glass-card border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        className="flex-1 gradient-primary text-white hover:scale-105 transition-transform duration-200"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:scale-105 transition-transform duration-200 gradient-border glass-card"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform duration-200 gradient-border glass-card">
              <a href="https://github.com/karthikpeddi21032002" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;