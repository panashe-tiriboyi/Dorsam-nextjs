import React from "react";
import AboutUs from "./aboutUs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.0,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
    console.log("use effect hook, inView", inView);
  }, [inView]);
  return (
    <div id="aboutUs" style={{ paddingTop: "100px" }} ref={ref}>
      <motion.div animate={animation}>
        <AboutUs />
      </motion.div>{" "}
    </div>
  );
};

export default About;
