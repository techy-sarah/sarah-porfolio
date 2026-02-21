import React from "react";
import "./about.scss";

const About = () => {

  const stack = [
    "HTML & (S)CSS",
    "Javascript",
    "React",
    "Typescript",
    "Tailwind CSS",
    "Next Js",
    "Astro",
    "Vite",
  ];

  return (
    <div className="about">
      <div
        className="textContainer"
        // variants={variants}
      >
        <p>
          Hi, I’m Sarah Akan, a Frontend Developer based in Lagos, Nigeria, focused on building user centered, scalable web applications. I enjoy turning ideas into clean, intuitive interfaces while writing maintainable and reusable code.

I currently work as a Frontend Developer at Zedi Inc, where I collaborate with cross functional teams to build user focused, production ready features. I thrive in environments that encourage learning, ownership, and continuous improvement.

I am naturally curious and driven by growth. I enjoy learning new technologies, improving my craft, and stepping outside my comfort zone to take on new challenges. When I am not building products, I enjoy singing, reading, cooking, watching movies, and dancing with enthusiasm.

I am always open to new opportunities, meaningful collaborations, and conversations about building impactful digital experiences.
        </p>
      </div>
      <div className="formContainer">

        <h4 className="">My Technology Stack:</h4>
        <div className="stackContainer">

{stack.map((stack)=>
<p className="stack">{stack}</p>
)}
          </div> 
        {/* <form className="">
          <input
            type="text"
            placeholder="Enter your name "
            required
            name="name"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email address "
            required
          />
          <textarea
            name="message"
            className=""
            rows={8}
            placeholder="Write your message"
          ></textarea>
          <button>Send Message </button>
        </form> */}
      </div>
    </div>
  );
};

export default About;
