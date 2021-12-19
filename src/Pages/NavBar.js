import React from "react";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  let authenticated = localStorage.getItem("Auth");
  let category = localStorage.getItem("category");
  return (
    <div>
      <Navbar bg="success" expand="lg" style={{ color: "white" }}>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="lexicon-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span style={{ marginLeft: "5px" }}>Kisan</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {authenticated === "true" ? (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/viewblogs">Blogs</Nav.Link>
                <Nav.Link href="/view_graph">View Statistics</Nav.Link>
                {category === "Private Sector" ? (
                  <Nav.Link href="/post_crop_rates">Manage Dashboard</Nav.Link>
                ) : (
                  <div></div>
                )}
                <NavDropdown title="Detailed Info" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/map">
                    National Details
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/crop_details">
                    Crop Details
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/feedback">Post feedback</Nav.Link>
                {category === "Private_Sector" ? (
                  <Nav.Link href="/post_crop_rates">Post Crop Price</Nav.Link>
                ) : (
                  <></>
                )}
                {category === "Governament" && category !== "Private_Sector" ? (
                  <Nav.Link href="/manage_dashboard">Manage Dashboard</Nav.Link>
                ) : (
                  <div></div>
                )}
                {category === "Governament" && category !== "Private_Sector" ? (
                  <>
                    <Nav.Link href="/view_grievance">View Grievance</Nav.Link>
                    <Nav.Link href="/view_feedback">View Feedback</Nav.Link>
                  </>
                ) : (
                  <Nav.Link href="/post_grievance">Post Grievance</Nav.Link>
                )}

                <Nav.Link href="/change_password">Self Service</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <div></div>
          )}
          <Navbar.Collapse className="justify-content-end">
            {authenticated === "false" || authenticated === null ? (
              <Nav>
                <Nav.Link href="/login">
                  <Button className="navbarbtn" variant="success">
                    Log In
                  </Button>
                </Nav.Link>
                <Nav.Link href="/signup">
                  <Button className="navbarbtn" variant="success">
                    Sign up
                  </Button>
                </Nav.Link>
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
                  <Button className="navbarbtn" variant="success">
                    Log Out
                  </Button>
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
