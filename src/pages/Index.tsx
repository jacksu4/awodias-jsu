
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Videos from "@/components/Videos";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Resume />
      <Videos />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
