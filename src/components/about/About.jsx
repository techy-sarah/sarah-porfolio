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
          Hello! My name is Sarah Akan, a software engineer based in Lagos,
          Nigeria. I'm thrilled to have you here. I have a passion for building
          amazing products that solve user problems, all while writing clean,
          reusable, and readable code. I embrace adventures because they push me
          out of my comfort zone and teach me new things. Currently, I work as a
          Frontend Engineer at Zedi Inc. In my free time, I enjoy singing (and
          yes, I have a good voice! 😄), reading, learning new things, cooking,
          watching movies, and dancing (even though I'm not very good at it). I
          also love meeting new people and so let's connect and create interesting
          solutions together!
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
