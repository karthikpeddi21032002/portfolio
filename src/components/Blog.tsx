import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/portfolio";

const Blog = () => {
  return (
    <section id="blog" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing insights and experiences from scaling enterprise systems and AI implementation
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group glass-card hover:border-tech/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  {/* Content */}
                  <div className="flex-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-tech/10 text-tech border-tech/20">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-tech transition-colors duration-200">
                        {post.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {post.description}
                      </p>
                      
                      <Button 
                        className="group-hover:scale-105 transition-transform duration-200"
                        asChild
                      >
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                          Read Article
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </div>

                  {/* Featured Image Placeholder */}
                  <div className="md:w-64 h-48 md:h-auto gradient-secondary relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-center justify-center">
                      <div className="text-lg font-bold text-white text-center px-4">
                        Migration<br/>Case Study
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* More Articles CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              More technical insights and project deep-dives coming soon
            </p>
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform duration-200 gradient-border glass-card">
              <a href="https://medium.com/@karthik.peddi.2103" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-2" />
                Follow on Medium
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;