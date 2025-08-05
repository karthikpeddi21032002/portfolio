import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Wrench, 
  Server, 
  Database, 
  Brain, 
  Cloud,
  TestTube,
  Zap
} from "lucide-react";
import { skills } from "@/data/portfolio";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: skills.programmingLanguages,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: skills.developerTools,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Technologies & Frameworks",
      icon: Server,
      skills: skills.technologies,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: skills.databases,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "AI/ML Tools",
      icon: Brain,
      skills: skills.aiMlTools,
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "Cloud & Observability",
      icon: Cloud,
      skills: skills.cloudObservability,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Testing & Build Tools",
      icon: TestTube,
      skills: skills.testingBuildTools,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 section-bg-orange">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications from backend microservices to AI-powered solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group relative overflow-hidden border-border hover:border-tech/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3 text-lg">
                      <div className="p-2 bg-tech/10 rounded-lg group-hover:bg-tech/20 transition-colors duration-300">
                        <IconComponent className="h-5 w-5 text-tech" />
                      </div>
                      <span className="group-hover:text-tech transition-colors duration-300">
                        {category.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs px-3 py-1 bg-muted hover:bg-tech/10 hover:text-tech hover:border-tech/30 transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Expertise Highlights */}
          <div className="mt-16 space-y-8">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Core <span className="gradient-text">Expertise</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6 border-border hover:border-primary/50 transition-colors duration-300">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Backend Development</h4>
                <p className="text-sm text-muted-foreground">
                  Expertise in Java-SpringBoot microservices, RESTful APIs, and distributed systems architecture
                </p>
              </Card>

              <Card className="text-center p-6 border-border hover:border-tech/50 transition-colors duration-300">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-tech/10 rounded-full flex items-center justify-center mx-auto">
                    <Brain className="h-8 w-8 text-tech" />
                  </div>
                </div>
                <h4 className="font-semibold mb-2">AI Integration</h4>
                <p className="text-sm text-muted-foreground">
                  Building AI-powered solutions with LLMs, prompt engineering, and intelligent automation
                </p>
              </Card>

              <Card className="text-center p-6 border-border hover:border-accent/50 transition-colors duration-300">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-accent-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Performance & Scale</h4>
                <p className="text-sm text-muted-foreground">
                  Optimizing systems for high performance, handling 250M+ user migrations and improving API efficiency by 60%
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;