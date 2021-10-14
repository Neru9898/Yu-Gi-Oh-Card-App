import { useState } from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Button,
  ListGroup,
} from "react-bootstrap";

export const NavMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Button onClick={handleShow}>Menu</Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton> </Offcanvas.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cards</ListGroup.Item>
            <ListGroup.Item>Card Sets</ListGroup.Item>
            <ListGroup.Item>Archetype</ListGroup.Item>
            <ListGroup.Item>Card Pricing</ListGroup.Item>
          </ListGroup>
        </Offcanvas>
      </Navbar>
    </>
  );
};
