import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  let authenticated = localStorage.getItem("Auth");
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {authenticated === "true" ? (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <div></div>
          )}
          <Navbar.Collapse className="justify-content-end">
            {authenticated === "false" ? (
              <Nav>
                <Nav.Link href="/login">Log in</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Navbar.Text>
                  Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                <Nav.Link
                  onClick={() => {
                    localStorage.setItem("Auth", false);
                    window.location.reload();
                  }}
                >
                  Log out
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
