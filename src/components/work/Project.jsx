import { useRef,  } from "react";
import "./project.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
 
 

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "./send.jpg",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    url: "https://sendmercuryapp.com/",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "./zedi.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    url: "https://zedi.africa/",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "./hire.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    url: "https://hirefoster.com/",
  },
  {
    id: 4,
    title: "Music App",
    img: "./flow.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    url: "https://www.zedflo.com/",
  },
  {
    id: 5,
    title: "Music App",
    img: "./test.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    url: "https://test.hirefoster.com/",
  },

  {
    id: 6,
    title: "Music App",
    img: "./acad.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    url: "https://academy.thezedi.ai/",
  },
];

const Single = ({item}) =>{
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end s tart"],
  });


  const y = useTransform(scrollYProgress, [0,1], [-300, 300]); 

return (
  <section>
    <div className="container">
      <div className="wrapper">
        <div ref={ref} className="imageContainer">
          <img src={item.img} alt="" />
        </div>

        <motion.div className="textContainer" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          {/* <button> */}
            {/* {" "} */}
            <a href={item.url}>View project</a>
          {/* </button> */}
        </motion.div>
      </div>
    </div>
  </section>
);

} 

const Projects = () => {
  
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });

    const scaleX =  useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    })
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Projects