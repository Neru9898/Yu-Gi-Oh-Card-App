import { useState } from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Button,
  ListGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Border, List } from "react-bootstrap-icons";
export const NavMenu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar>
      <Container fluid>
        <Row>
          <Col>
            <Button
              variant="dark"
              onClick={handleShow}
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <List style={{ height: "45px", width: "45px" }} />
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Yu-Gi-Oh</Offcanvas.Title>
              </Offcanvas.Header>
              <ListGroup>
                <ListGroup.Item>All Cards</ListGroup.Item>
                <ListGroup.Item>All Cards</ListGroup.Item>
                <ListGroup.Item>All Cards</ListGroup.Item>
                <ListGroup.Item>All Cards</ListGroup.Item>
              </ListGroup>
            </Offcanvas>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
