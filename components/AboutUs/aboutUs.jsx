import React, { Component } from "react";
import Button from "../button/button";

class AboutUs extends React.Component {
  state = {
    buttonStatus: true,
    buttonName: "Read More",
    content:
      "Dorsam Automotive (Pvt) Ltd trading as DalkPro Gweru is a Company born from Dalkeith Engineering and as such inherited all the Dalkeith Gweru equipment, staff and machinery. It is a grown and Innovative driven business Entity that does not believe in fitting in but coming up with new and exciting products and services.",
  };
  styles = {
    padding: "40px",
    paddingBottom: "15px",
    border: "1px solid rgba(86, 61, 124, .2)",
  };

  render() {
    return (
      <div>
        <h2 className="heading1 m-3 text-light">About Us</h2>
        <div
          className="aboutUs2 container px-0 card"
          style={{
            color: "rgb(250, 250, 250)",
            marginBottom: "40px",
            borderRadius: "21px 21px 21px 21px",
            background: "rgba(76, 154, 207, 0.5)",
          }}
        >
          <div className="row mb-3 flex-column-reverse flex-lg-row ">
            <div
              style={this.styles}
              className=" col-lg-6 col-md-12 col-sm-12 themed-grid-col mx-auto"
            >
              <div
                className="picture bg-light shadow-sm mx-auto "
                style={{
                  background: "url(/images/AboutUs.jpg)",
                  backgroundSize: "cover",
                  backgroundColor: "#fff",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "local",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div
              style={this.styles}
              className="col-lg-6 col-md-12 col-sm-12 themed-grid-col "
            >
              <p className="content">{this.state.content} </p>

              <Button
                style={{ margin: "1px" }}
                btnname={this.handleReadMoreButtonName()}
                btnStyle="btn btn-secondary btn-sm m-2"
                onAction={this.handleReadMore}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  buttonName = this.state.buttonName;

  handleReadMore = () => {
    const contentA =
      "Dorsam Automotive (Pvt) Ltd trading as DalkPro Gweru is a Company born from Dalkeith Engineering and as such  inherited all the Dalkeith Gweru equipment, staff and machinery.   It is a grown and Innovative driven business Entity that does not believe in fitting in but coming up with new and exciting products and services. It is our belief that the world requires people and organisations to be different. We are an organisation driven by thirsty for success and bringing variety to the Zimbabwean motorists. Dorsam Automotive is a wholly Zimbabwean owned company registered with the registrar of companies under chapter 24:03 of the companies’ act. We are a specialised operator in the motor industry involved in engine overhauls, the supply and fitment of brand new batteries, brand new Tyres, exhaust systems, automotive spares, suspension repairs, vehicles services and maintenance, wheel balancing, wheel alignment, remanufacturing of motor vehicle rubber components like rear axle bushes, tie rod ends, steering knuckles, Drag-links ends, drop arms, centre track, king pins, Remanufacturing of Engine mountings, Gearbox mountings, shock pads, ,  D- Bushes, bump stoppers, Cab mountings for trucks and buses, lower and upper control arm bushes for all vehicle types, Disc skimming, Brake drums skimming, Idler arm bushes, Brake shoes re- bonding, Caliper pins re-bushing , engine overhauls, Gearbox repairs, Diff repairs, New motor spares and workshop tools, Press fitting, Supply and repairs of power steering parts for light motor vehicles, heavy duty motor vehicles, caterpillars, tractors, forklifts, Hydraulic ramps and pumps, power steering boxes, power steering pumps, steering Racks, General engineering and machining for all mining and motor vehicle spares. Propshafts and Universal joints.  All mining rubberized components.";
    const contentB =
      "Dorsam Automotive (Pvt) Ltd trading as DalkPro Gweru is a Company born from Dalkeith Engineering and as such inherited all the Dalkeith Gweru equipment, staff and machinery. It is a grown and Innovative driven business Entity that does not believe in fitting in but coming up with new and exciting products and services.";

    const content = this.state.buttonStatus ? contentA : contentB;

    this.setState({
      buttonStatus: !this.state.buttonStatus,
      content: content,
    });
  };

  handleReadMoreButtonName = () => {
    let btnName = this.state.buttonName;
    btnName = this.state.buttonStatus ? "Read More" : "Read Less";
    return btnName;
  };
}

export default AboutUs;
