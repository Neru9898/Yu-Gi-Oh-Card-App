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

export const NavMenu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <Navbar>
        <Button
          variant="light"
          style={{ textDecoration: "none" }}
          onClick={handleShow}
        >
          Menu
        </Button>
      </Navbar>
    </Container>
  );
};
