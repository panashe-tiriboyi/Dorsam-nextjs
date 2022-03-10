import React from "react";
import Bushesmodal from "./bushes/bushesModal";
import RepairModal from "./repairs/repairsModal";
import Image from "next/image";

const Service = (props) => {
  const styles = {
    paddingTop: "15px",
    paddingBottom: "15px",
    backgroundColor: "rgba(76, 154, 207, 0.5)",
    border: "5px solid rgba(86, 61, 124, .5)",
  };

  const name = props.serviceName;

  let bushes =
    props.serviceName == "We Recondition motor vehicles rubber bushes" ? (
      <Bushesmodal />
    ) : null;

  let busheslink_description =
    props.serviceName == "We Recondition motor vehicles rubber bushes"
      ? "Click the button below to see the types of bushes we recondition"
      : null;

  let repairs =
    props.serviceName == "We do Repairs and servicing" ? <RepairModal /> : null;

  let ids = props.serviceId;
  let class_nanme;

  if (ids > 13) {
    class_nanme = "text-light col-lg-4 col-md-4 col-sm-12 themed-grid-col";
  } else if (ids > 7) {
    class_nanme = "text-light col-lg-6 col-md-6 col-sm-6 themed-grid-col";
  } else if (ids > 6) {
    class_nanme = "text-light col-lg-12 col-md-12 col-sm-12 themed-grid-col";
  } else {
    class_nanme = "text-light col-lg-4 col-md-4 col-sm-6 themed-grid-col";
  }

  return (
    <div style={styles} className={class_nanme}>
      <div className="card" style={{ height: "100%", width: "100%" }}>
        <Image
          src={props.Image}
          className="card-Image-top"
          width="100%"
          height="100%"
          alt="..."
        />
        <div className="card-body text-dark">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"> {busheslink_description} </p>
          {repairs}
          {bushes}
        </div>
      </div>
    </div>
  );
};

export default Service;
