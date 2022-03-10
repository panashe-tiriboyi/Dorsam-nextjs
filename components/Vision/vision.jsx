import React, { Component } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
const Vision = () => {
  const styles = {
    paddingTop: "15px",
    paddingBottom: "15px",

    border: "1px solid rgba(86, 61, 124, .2)",
  };
  const styles2 = {
    width: "80%",
    height: "300px",
    borderRadius: "21px 21px 0 0",
  };
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
    <div ref={ref} style={{ width: "100%" }}>
      <motion.div
        animate={animation}
        className="container px-0 card"
        style={{
          marginBottom: "40px",
          borderRadius: "21px 21px 21px 21px",
          background: " rgba(76, 154, 207, 0.5)",
        }}
      >
        <div className="row mb-3">
          <div
            style={styles}
            className=" text-light col-lg-6 col-md-6col-sm-12 themed-grid-col"
          >
            <h3 className="heading">Vision</h3>
            <p className="content">
              To be the leading provider of Automotive and Engineering products
              and services, meeting our customers expectations in Zimbabwe and
              beyond.
            </p>
          </div>
          <div
            style={styles}
            className="col-lg-6 col-md-6col-sm-12 themed-grid-col"
          >
            <div
              className="picture bg-light shadow-sm mx-auto"
              style={{
                background: "url(/images/vision4edit.jpg)",
                backgroundSize: "cover",
                backgroundColor: "#fff",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "local",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Vision;
