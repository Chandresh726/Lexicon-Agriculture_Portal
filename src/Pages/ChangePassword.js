import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button } from "react-bootstrap";

const ChangePassword = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [msg, setmsg] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
    let body = {
      username: username,
      new_password: password,
    };
    fetch("/api/change_password", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setmsg(data);
        if (data.status === 200) {
          localStorage.setItem("Auth", false);
          window.location.href = "http://localhost:3000";
        }
      });
  };
  return (
    <div>
      <Navbar />
      <Container>
        <div className="pageheading">Change Password</div>
        <div className="form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                onChange={(e) => setusername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                handlesubmit(e);
              }}
            >
              Change Password
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ChangePassword;
