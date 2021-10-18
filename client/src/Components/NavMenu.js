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
    <Container fluid>
      <Navbar>
        <Button
          style={{ backgroundColor: "transparent", border: "none" }}
          onClick={handleShow}
        >
          <List style={{ width: "45px", height: "45px" }} />
        </Button>

        <Col>Insert Image</Col>
      </Navbar>
    </Container>
  );
};
