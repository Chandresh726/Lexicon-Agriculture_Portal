import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  let authenticated = localStorage.getItem("Auth");
  let category = localStorage.getItem("category");
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="lexicon-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Kisan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {authenticated === "true" ? (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/change_password">Self Service</Nav.Link>
                <Nav.Link href="/viewblogs">Blogs</Nav.Link>
                <Nav.Link href="/map">Map</Nav.Link>
                {category === "Governament" && category !== "Private Sector" ? (
                  <Nav.Link href="/manage_dashboard">Manage Dashboard</Nav.Link>
                ) : (
                  <div></div>
                )}
                {category === "Governament" && category !== "Private Sector" ? (
                  <Nav.Link href="/view_grievance">View Grievance</Nav.Link>
                ) : (
                  <Nav.Link href="/post_grievance">Post Grievance</Nav.Link>
                )}
                {/* <NavDropdown title="Self Service" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/change_password">
                    Change Password
                  </NavDropdown.Item>
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
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          ) : (
            <div></div>
          )}
          <Navbar.Collapse className="justify-content-end">
            {authenticated === "false" || authenticated === null ? (
              <Nav>
                <Nav.Link href="/login">Log in</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Navbar.Text>
                  Signed in as:{" "}
                  <a href="#login">{localStorage.getItem("username")}</a>
                </Navbar.Text>
                <Nav.Link
                  onClick={() => {
                    localStorage.clear();
                    // localStorage.setItem("Auth", false);
                    window.location.href = "http://localhost:3000";
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
