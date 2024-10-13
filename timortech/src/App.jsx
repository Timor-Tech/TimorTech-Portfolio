import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Values from "./components/Values";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Each section is wrapped with a section tag and given a unique ID */}
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="values">
          <Values />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
