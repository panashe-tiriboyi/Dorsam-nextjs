import React from "react";
import Image from "next/image";

import cardList from "./card_list";
import Col from "react-bootstrap/Col";

const BushCard = () => {
  const styles = {
    borderWidth: "5px",
    width: "100%",
    height: "90%",
    marginBottom: "30px",

    backgroundColor: "rgba(0, 0, 0, 0.3)",

    fontSize: "2.3vw",
    textAlign: "center",
  };
  const list = cardList.map((card) => (
    <Col key={card.id} xs={12} md={6} sm={12} lg={4} xl={4} xxl={3}>
      <div className="card" style={styles}>
        <div className="card-body">
          <h5 className="card-title text-light">{card.id}</h5>
          <hr></hr>
          <Image src={card.Image} alt="" />
          <hr></hr>

          <p className="card-text text-light">{card.bushName}</p>
        </div>
      </div>
    </Col>
  ));

  return <>{list}</>;
};

export default BushCard;
