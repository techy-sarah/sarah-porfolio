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
           Hi, I’m Sarah Akan, a Frontend Developer based in Lagos, Nigeria. I build user centered, scalable web applications with a focus on clean, maintainable code and intuitive interfaces.

I currently work as a Frontend Developer at Zedi Inc, collaborating with cross functional teams to deliver user focused, production ready features.

I’m curious, growth driven, and enjoy learning new technologies and taking on new challenges. Outside of work, I enjoy singing, reading, cooking, watching movies, and dancing.

I’m open to new opportunities and collaborations focused on building impactful digital products.
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
