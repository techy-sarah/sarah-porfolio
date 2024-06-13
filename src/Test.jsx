import { delay, motion } from "framer-motion";
import { useState } from "react";
const Test = () => {
const [open , setOpen]=useState(false)
    const variants = {
      visible: (i) => ({
        opacity: 1,
        x: 100,
        transition: {delay: i * 0.3 },
      }),
      hidden: { opacity: 0 },
    }; 

    const items = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <div className="course">
      <motion.ul initial={"hidden"} animate={"visible"} variants={variants}>
        {items.map((item, i) => (
          <motion.li custom={i } variants={variants} key={item}>{item}</motion.li>
        ))}
      </motion.ul>
      {/* <motion.div
        className="box"
        //   animate={{opacity:1, scale:1}}
        transition={{ duration: 2 }}
        //   initial={{opacity:0.5, scale:0.5 }}
        //   whileInView={{opacity:1, scale:2}}
        variants={variants}
        // initial='hidden'
        // animate='visible'
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Click</button> */}
    </div>
  );
}

export default Test