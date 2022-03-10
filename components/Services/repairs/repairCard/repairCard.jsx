import React from "react";
import repairsList from "../repairsList";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "next/image";

const Repaircard = () => {
  const styles = {
    repairCard: {
      borderWidth: "5px",
      width: "100%",
      height: "90%",
      marginBottom: "30px",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      fontSize: "2.3vw",
      textAlign: "center",
    },
  };
  const list = repairsList.map((item) => (
    <Col key={item.id} xs={12} md={6} sm={12} lg={4} xl={4} xxl={3}>
      <div className="card" style={styles.repairCard}>
        <div className="card-body">
          <h5 className="card-title text-light">{item.id}</h5>
          <hr />
          <Image src={item.Image} alt="" />
          <hr />
          <p className="card-text text-light">{item.repairName}</p>
        </div>
      </div>
    </Col>
  ));
  return <>{list}</>;
};

export default Repaircard;
