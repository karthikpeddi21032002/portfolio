import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">
        <Hero />
        <div className="section-bg-blue">
          <About />
        </div>
        <div className="section-bg-green">
          <Experience />
        </div>
        <div className="section-bg-purple">
          <Projects />
        </div>
        <div className="section-bg-orange">
          <Skills />
        </div>
        <div className="section-bg-blue">
          <Blog />
        </div>
        <div className="section-bg-purple">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
