import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Repaircard from "./repairCard/repairCard";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      fullscreen
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          We do the following Repairs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          background: "url(/images/differential.jpg)",
          backgroundSize: "cover",
          backgroundColor: "#fff",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="show-grid"
      >
        <Container>
          <Row style={{ height: "100%" }}>
            <Repaircard />
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function RepairsModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <hr style={{ background: "black" }}></hr>
      <div
        className="text-center text-md-left"
        style={{ position: "relative", alignIContent: "center" }}
      >
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Repairs
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}

export default RepairsModal;
