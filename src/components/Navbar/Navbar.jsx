
import React from "react";

import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sarah Akan
        </motion.span>
        <div className="socials">
          <a target="_blank" href="https://github.com/techy-sarah">
            <FaGithub size={24} />

          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sarah-akan-738310222/"
          >
            <FaLinkedinIn size={24} />

          </a>
          <a target="_blank" href="https://www.behance.net/sarahakan">
            <FaBehance size={24} />

          </a>
          <a target="_blank" href="https://x.com/techy_queen">
            <FaXTwitter size={24} />

          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar