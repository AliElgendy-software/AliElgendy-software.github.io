import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200 selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />

        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
