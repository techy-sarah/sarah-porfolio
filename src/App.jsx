import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/work/Project";
import Test from "./Test";
const App = () => {
  return (
    <div>
      <section id="Home" className="">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type={"about"} />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Parallax type={"project"} />
      </section>
      <Projects/>
      {/* <section id="Blog">Blog</section> */}
      <section id="Contact"><Contact/></section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
