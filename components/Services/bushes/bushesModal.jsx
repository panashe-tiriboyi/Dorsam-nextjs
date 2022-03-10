import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import BushCard from "./Bushcard/bushCard";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      fullscreen
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          We Recondition the following motor vehicles rubber bushes
        </Modal.Title>
      </Modal.Header>

      <Modal.Body
        style={{
          background: "url(/images/bushes.jpg)",
          backgroundSize: "cover",
          backgroundColor: "#fff",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="show-grid"
      >
        <Container>
          <Row>
            <hr />
            <BushCard />
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Bushesmodal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <hr style={{ background: "black" }}></hr>
      <div
        className="text-center text-md-left"
        style={{ position: "relative" }}
      >
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Bushes
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}

export default Bushesmodal;
