import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
        <Navbar className="navbarka">
          <Navbar.Brand href="/">Főoldal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/hozzaad">Sorozat hozzáad</Nav.Link>
              <Nav.Link href="/megjelenit">Sorozatok</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  );
};

export default NavBar;
