import { useRef,  } from "react";
import "./project.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
 
 

const items = [
  {
    id: 1,
    title: "SendMercury",
    img: "./send.png",
    desc: "SendMercury, a product that transcends mere distribution, fosters a global community where vendors effortlessly list products on 70+ online stores. It ensures real-time stock updates across platforms and allows universal management of product details, empowering vendors to excel in an interconnected marketplace of limitless potential. ",
    url: "https://sendmercuryapp.com/",
    stack: [
      "NextJs",
      "Tailwind CSS",
      "Axios",
      "Zustand",
      "NodeJS",
      "Paystack",
      "Stripe",
    ],
  },
  {
    id: 2,
    title: "Zedi",
    img: "./zedi.jpg",
    desc: "Zedi stands as a top-tier growth company, providing specialized marketing services to drive client expansion. This website includes essential sections like Home, About, Services, and a  that is powered by Contentful CMS. With advanced SEO optimization and an integrated Airtable API for efficient contact form data management, Zedi ensures a dynamic online presence, fueling exponential growth for our clients.",
    url: "https://zedi.africa/",
    stack: ["Astro", "Tailwind Css", "Storybook", "Axios", "Contenful CMS"],
  },
  {
    id: 3,
    title: "Hirefoster",
    img: "./hire.jpg",
    desc: "Hirefoster is a premier platform connecting companies with top growth marketing professionals in Africa. Using Airtable API, I built the site from scratch, ensuring seamless data handling, advanced SEO, and an exceptional user experience. This robust platform drives real business growth and effectively matches companies with verified professionals.",
    url: "https://hirefoster.com/",
    stack: [
      "NextJs",
      "Tailwind CSS",
      "Axios",
      "Airtable",
      "Google Analytics",
      "Facebook Pixels",
    ],
  },
  {
    id: 4,
    title: "Zedflo",
    img: "./flow.jpg",
    desc: "ZedFlo is the leading performance sales platform for B2B companies. its unique approach ensures clients only pay for achieved results and KPIs, leveraging cutting-edge technology and expert sales professionals. ZedFlo excels in converting leads from ads, maximizing sales effectiveness and driving business growth.",
    url: "https://www.zedflo.com/",
    stack: [
      "NextJs",
      "Tailwind CSS",
      "Axios",
      "Airtable",
      "Google Analytics",
      "Facebook Pixels",
    ],
  },
  {
    id: 5,
    title: "ExchangePal",
    img: "./exchange.png",
    desc: "I led the frontend development of the ExchangePal company website and the internal admin dashboard that powers the mobile app. The website showcases the brand and services with a clean, responsive design, while the admin dashboard enables real-time management of users, transactions, and platform settings. My role involved building scalable React components, integrating APIs, and ensuring seamless performance across web and mobile platforms.",
    url: "https://www.exchangepal.com/",
    stack: [
      "Next",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "Google Analytics",
      "Facebook Pixels",
    ],
  },

  {
    id: 6,
    title: "Zedintro",
    img: "/zedintro.png", 
    desc: "I collaborated with a team of developers on the frontend development of Zedintro, a networking platform designed to simplify warm introductions across industries. My contributions included building responsive UI components, implementing reusable layouts, and integrating API endpoints to support key user flows. I focused on writing clean, maintainable code to ensure a consistent and engaging user experience across devices.",
    url: "https://zedintro.com/",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "GitHub",
      "Responsive Design",
    ],
  },
];

const Single = ({item}) =>{
  const ref = useRef()
  

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end s tart"],
  });


  const y = useTransform(scrollYProgress, [0,1], [-550, 300]); 

return (
  <section>
    <div className="container">
      <div className="wrapper">
        <div
          // style={{
          //   backgroundImage: `url(${item.img})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // }}
          ref={ref}
          className="imageContainer"
        >
          
          <img  src={item.img} alt="" />
        </div>

        <motion.div className="textContainer" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>

          {/* <div className="stackContainer">

{item.stack.map((stack)=>
<p className="stack">{stack}</p>
)}
          </div> */}

          <a href={item.url}>View project</a>

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
        <h1> Projects</h1>
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