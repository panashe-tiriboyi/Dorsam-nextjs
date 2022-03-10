import React, { Component } from "react";
import Button from "../button/button";
import classes from "../../styles/home2.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Image from "next/image";

const Welcome = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        transition: {
          type: "spring",
          duration: 1.0,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ scale: 0.1 });
    }
    console.log("use effect hook, inView", inView);
  }, [inView]);

  return (
    <div ref={ref} id="home">
      <div className={classes.Home}>
        <div className={classes.Home2}>
          <Image src="/logoDorsam.jpg" alt="" width="50%" height="50%" />
          <h1 className={classes.Name}>DORSAM AUTOMOTIVE (PVT) LTD</h1>
          <motion.div animate={animation} className={classes.Home3}>
            <h1 className={classes.Mission} style={{}}>
              MISSION STATEMENT
            </h1>
            <p className={classes.Statement}>
              To provide an efficient, effective and easily accessible range of
              Automotive products and services to our customers offering value
              for money and swift turnaround times to both motor vehicle
              customers and mining and general engineering customers.
            </p>
            <Button
              style={{ verticalAlign: "bottom" }}
              btnname="Get Qoutation"
              btnStyle="btn btn-secondary  m-4"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
