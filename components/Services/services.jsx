import React, { Component } from "react";
import Service from "./service";
import Button from "../button/button";
import service_list from "./service_list";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const list = service_list.map((service) => (
    <Service
      key={service.id}
      serviceId={service.id}
      serviceName={service.service_name}
      Image={service.Image}
    />
  ));
  const { ref, inView } = useInView({
    threshold: 0.01,
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
      id="Services"
      ref={ref}
      className=" text-light container px-0 mt-5"
      style={{ padding: "100px" }}
    >
      <motion.div
        animate={animation}
        className="row mb-3 "
        style={{ position: "relative" }}
      >
        <div
          className="card col-12 col-sm-12 themed-grid-col"
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            backgroundColor: "rgba(76, 154, 207, 0.5)",
            borderRadius: "21px 21px 0 0",
          }}
        >
          <h3 className="heading1 m-3" style={{ textAlign: "center" }}>
            Services
          </h3>
        </div>

        {list}

        <div
          className="col-12 col-sm-12 themed-grid-col"
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            backgroundColor: "rgba(86, 61, 124, .15)",
          }}
        >
          <p
            style={{ marginLeft: "20%", width: "60%", textAlign: "center" }}
          ></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
