import React, { useState } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [msg, setmsg] = useState([]);
  const [Category, setCategory] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    let body = {
      username: email,
      password: password,
      category: Category,
    };
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setmsg(data);
        if (data.status === 200) {
          localStorage.setItem("username", data.username);
          localStorage.setItem("state", data.state);
          localStorage.setItem("district", data.district);
          localStorage.setItem("category", data.category);
          localStorage.setItem("aadhar", data.aadhar);
          localStorage.setItem("Auth", true);
          window.location.href = "http://localhost:3000";
        }
      });
  };
  return (
    <div>
      <Navbar />
      <Container>
        <div className="pageheading">Log In</div>
        <div className="form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select Category</option>
                <option value="Governament">Governament</option>
                <option value="Farmer">Farmer</option>
                <option value="Private_Sector">Private Sector</option>
              </Form.Select>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                handlesubmit(e);
              }}
            >
              LOGIN
            </Button>
          </Form>
          {msg != [] && msg.status == 400 ? (
            <Alert key="alert" variant="alert">
              Invalid Credentials
            </Alert>
          ) : (
            <div></div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Login;
