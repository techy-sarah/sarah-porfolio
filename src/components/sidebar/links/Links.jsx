import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "About", "Projects", "Blog", "Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <motion.a
            href={`#${item}`}
            key={item}
            variants={itemsVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}{" "}
          </motion.a>
          {index === items.length - 1 && <a download={"sarah-akan-resume"} href="/SARAH AKAN CV.pdf" className="btn"> Resume</a>}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default Links;
