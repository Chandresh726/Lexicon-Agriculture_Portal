import React, { useState } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button, Alert, Breadcrumb } from "react-bootstrap";


const FeedBack = () => {
  const [feedback, setfeedback] = useState("");
  const [feedbackres, setfeedbackres] = useState([]);
  let body = {
    username: localStorage.getItem("username"),
    state: localStorage.getItem("state"),
    district: localStorage.getItem("district"),
    feedback: feedback,
  };
  const handlefeedsubmit = (e) => {
    e.preventDefault();
    fetch("/api/post_feedback", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setfeedbackres(data);
        
        console.log(data);
      });
  };
  const handleclear = () => {
    setfeedback("");
  };
  return(
    <div>
    <Navbar />
    <Container>
      <div className="pageheading">Give your feedback</div>
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicfeedback">
            <Form.Label>
              <h3 style={{ fontWeight: "700" }}>
                Please share your feedback here
              </h3>
            </Form.Label>
            <Form.Control
              value={feedback}
              as="textarea"
              rows={10}
              placeholder="Give your feedback here"
              onChange={(e) => setfeedback(e.target.value)}
            />
          </Form.Group>
          <Button
            style={{ margin: "10px" }}
            variant="primary"
            type="submit"
            onClick={(e) => {
              handlefeedsubmit(e);
            }}
          >
            POST
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="primary"
            onClick={() => {
              handleclear();
            }}
          >
            Clear
          </Button>
        </Form>
        <Alert key="success" variant="success">
            {feedbackres.message}
          </Alert>
        {feedbackres != [] && feedbackres.status == 400 ? (
          <Alert key="alert" variant="alert">
            {feedbackres.message}
          </Alert>
        ) : (
          <div></div>
        )}
      </div>
    </Container>
  </div>
     );
};

export default FeedBack;
