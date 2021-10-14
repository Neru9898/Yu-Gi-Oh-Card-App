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
          <Offcanvas.Header closeButton>
            {" "}
            <Navbar.Brand href="#home">
              <img
                src="https://www.konami.com/kde_cms/eu_publish/uploads/EN-and-DE-Resized.png"
                width="300"
                height="120"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Offcanvas.Header>
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
