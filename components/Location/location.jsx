import React, { Component } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Location = () => {
  const styles = {
    position: "relative",
    zIndex: "3",
    paddingTop: "100px",
    paddingBottom: "15px",
    backgroundColor: "rgba(86, 61, 124, .15)",
    border: "1px solid rgba(86, 61, 124, .2)",
    height: "100vh",
  };
  const styles2 = {
    width: "80%",
    height: "300px",
    borderRadius: "21px 21px 0 0",
  };
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

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
    <div
      id="location"
      ref={ref}
      style={styles}
      className="text-light col-12 themed-grid-col px-0"
    >
      <motion.div
        animate={animation}
        className=" mb-5"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(76, 154, 207, 0.9)",
          zIndex: "2",
        }}
      >
        <h2 className="heading1 ">Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11186.88752607931!2d29.92704344551085!3d-19.531843281728626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2szw!4v1644372031081!5m2!1sen!2szw"
          width="100%"
          height="90%"
          style={{ border: 0, zIndex: "2" }}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default Location;
