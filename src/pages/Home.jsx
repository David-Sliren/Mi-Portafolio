import Contact from "../components/Contact/Contact";
import AboutMe from "../components/aboutMe/AboutMe";
import Navbar from "../components/ui/Navbar";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Hero from "../components/Hero/Hero";
import Certificates from "../components/Certificates/Certificates";
import Footer from "../components/ui/Footer";

function Home() {
  return (
    <div className="bg-[#121315] text-slate-200">
      {/* <header> */}
      <Navbar />
      {/* </header> */}
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <AboutMe />
        <Contact />
        {/* <Certificates /> */}
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Home;
