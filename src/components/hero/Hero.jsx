import React, { useState, useEffect } from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import { Blurhash } from "react-blurhash";
// import { encode } from "blurhash";

const Hero = () => {
  const image = "/img4.png";
  const [blurhash, setBlurhash] = useState("");
  const [recipeImage, setRecipeImage] = useState();
  const [recipeImageLoading, setRecipeImageLoading] = useState(true);
  const [placeholderBlurhash, setPlaceholderBlurhash] = useState(
    "LOG8ltozPDR.pyjFxajEK9WVWqoc"
  );

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setRecipeImage(img);
      setRecipeImageLoading(false);
    };
    img.onerror = () => {
      setRecipeImageLoading(false);
    };
    img.src = image;
  }, [image]);

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 3  ,
        staggerChildren: 0.1,
      },
    },

    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-740%",
      transition: {
         repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="hero ">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SARAH AKAN</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend Engineer and Product Designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a
              href={`#Projects`}
              variants={textVariants}
              className="btn-1"
            >
              See my Work
            </motion.a>
            <motion.a
              download={"sarah-akan-resume"}
              href="/Sarah Akan CV resume.pdf"
              variants={textVariants}
              className="btn-2"
            >
              Resume
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>

      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slidingText"
      >
        I Design And Build Durable Products
      </motion.div>
      <div className="imageContainer ">
        {/* {recipeImageLoading ? (
          <div className="img-gradient"></div>
        ) : ( */}
        <img src="/img4.png" alt={"my picture"} />
        {/* )} */}
      </div>
    </div>
  );
};

export default Hero;
