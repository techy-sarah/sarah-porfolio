import { Toaster } from "sonner";
import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar.jsx";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/work/Project";

import Test from "./Test";
const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <section id="Home" className="">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type={"about"} />
      </section>
      <section id="About-me">
        <About />
      </section>
      <section id="Projects">
        <Parallax type={"project"} />
      </section>
      <Projects />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
