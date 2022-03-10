import React, { Component } from "react";
import Button from "../button/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const ContactUs = () => {
  const styles = {
    backgroundColor: "rgba(76, 154, 207, 0.9)",
    border: "1px solid rgba(86, 61, 124, .2)",
    zIndex: "3",
    paddingLeft: "30px",
    paddingRight: "30px",
  };
  const styles2 = {
    width: "100%",
    zIndex: "3",
    position: "relative",
    marginTop: "140px",
    paddingTop: "150px",
    paddingBottom: "15px",
  };
  const { ref, inView } = useInView({
    threshold: 0.1,
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
    <div id="contactUs" ref={ref} style={styles2}>
      <motion.div
        animate={animation}
        className=" text-light container mb-5"
        style={styles}
      >
        <section className="mb-4">
          <h2 className="h1-responsive heading1 font-weight-bold text-center my-4">
            Contact us
          </h2>

          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                      <label htmlFor="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left">
                <a className="btn btn-primary">Send</a>
              </div>
              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>
                    Zimre Complex No. 34, Shamrock, Industrial Park, Gweru,
                    Zimbabwe
                  </p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>Tel: 054-229612</p>
                  <p>
                    Cell: +263-8644115765/ +263 773 027 974/ +263 772 721 400
                  </p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p style={{ fontSize: "13px" }}>email address</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ContactUs;
