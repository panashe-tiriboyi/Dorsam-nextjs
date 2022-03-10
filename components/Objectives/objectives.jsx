import React, { Component } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Objectives = () => {
  const styles = {
    paddingRight: "40px",
    paddingLeft: "40px",
    paddingBottom: "15px",
    paddingTop: "15px",

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
    <div ref={ref}>
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
            <h3 className="heading">Objectives</h3>
            <p>
              We strive to achieve our goals through working with the best
              eployees, suppliers and other manufacturers.We always aim to
              create a quality based chain that will ensure thath we only
              deliver Quality to our customers at the lowest cost possible. Our
              focus shall be giving the best in order to retain the best be it
              customers, suppliers or employees
            </p>
          </div>
          <div
            style={styles}
            className="col-lg-6 col-md-6col-sm-12 themed-grid-col"
          >
            <h3 className="heading text-light">Core Values</h3>
            <p>
              <u className="list text-light">
                <li>
                  <i>Precision and Quality work</i>
                </li>
                <li>
                  <i>Profesionalism</i>
                </li>
                <li>
                  <i>Ethical</i>
                </li>
                <li>
                  <i>Excellent technical experts</i>
                </li>
              </u>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Objectives;
