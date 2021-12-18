import React, { useState } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button, Alert } from "react-bootstrap";

const ManageDashboard = () => {
  const [sub, setsub] = useState("");
  const [link, setlink] = useState("");
  const [msg, setmsg] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    let body = {
      subject: sub,
      link: link,
    };
    fetch("/api/add_dashboard", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setmsg("Link added successfully");
        }
      });
  };
  return (
    <div>
      <Navbar />
      <Container>
        <div className="pageheading">Manage Dashboard</div>
        <div className="form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicManageDash">
              <Form.Label>
                <h4 style={{ fontWeight: "700" }}>
                  Enter Subject for the notice
                </h4>
              </Form.Label>
              <Form.Control
                value={sub}
                as="textarea"
                rows={5}
                placeholder="Enter Subject for the notice"
                onChange={(e) => setsub(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLink">
              <Form.Label>Enter URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the url for the above subject"
                onChange={(e) => setlink(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                handlesubmit(e);
              }}
            >
              Add Notice
            </Button>
            <Alert key="success" variant="success">
              {msg}
            </Alert>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ManageDashboard;
