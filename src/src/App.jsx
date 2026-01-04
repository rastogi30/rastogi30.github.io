import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Thinking from "./components/Thinking";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDeepDive from "./components/ProjectDeepDive";
import Journey from "./components/Journey";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300">
        <Navbar />
        <main className="pt-24">
          <Hero />
          <Thinking />
          <Skills />
          <Projects />
          <ProjectDeepDive />
          <Journey />
          <Resume />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

