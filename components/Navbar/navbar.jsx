import React, { Component } from "react";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar
      className="NavBar"
      expand="lg"
      variant="dark"
      style={{
        zIndex: "4",
        background: "rgba(62,107,167, .5)",
        background:
          "linear-gradient(180deg, rgba(250,250,250, .25) 2%, rgba(12,23,33, .9) 36%)",
        position: "fixed",
        width: "100%",
      }}
    >
      <Container>
        <Navbar.Brand className="Brand" href="#home">
          <Image src="/logo.svg" layout="fill" alt="" /> Dorsam Automotive
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ margin: "15px" }}>
          <Nav className="me-auto">
            <Nav.Link
              className="btn btn-outline-info btn-sm text-light mx-2"
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="btn btn-outline-info btn-sm text-light mx-2"
              href="#aboutUs"
            >
              About Us
            </Nav.Link>

            <Nav.Link
              className="btn btn-outline-info btn-sm text-light mx-2"
              href="#Services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="btn btn-outline-info btn-sm text-light mx-2"
              href="#location"
            >
              Location
            </Nav.Link>
            <Nav.Link
              className="btn btn-outline-info btn-sm text-light mx-2"
              href="#contactUs"
            >
              ContactUs
            </Nav.Link>
            <li>
              <i className="fas fa-phone mt-4 fa-2x "></i>
              <a className="Contact m-0">
                <p className=" m-0 text-light">Tel: 054-229612</p>
                <p className=" text-light">
                  Cell: +263-8644115765/ +263 773 027 974/ +263 772 721 400
                </p>
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
