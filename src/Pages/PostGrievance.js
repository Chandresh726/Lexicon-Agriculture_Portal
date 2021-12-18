import React, { useState } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button, Alert, Breadcrumb } from "react-bootstrap";

const PostGrievance = () => {
  const [griev, setgriev] = useState("");
  const [grievres, setgrievres] = useState([]);
  const [msg,setmsg]=useState("");
  let body = {
    username: localStorage.getItem("username"),
    state: localStorage.getItem("state"),
    district: localStorage.getItem("district"),
    blog: griev,
    aadhar: localStorage.getItem("aadhar"),
  };
  const handlegrievsubmit = (e) => {
    e.preventDefault();
    fetch("/api/post_grievance", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setgrievres(data);
        if(data.status===200){
          setmsg(data.message)
        }
        console.log(data);
      });
  };
  const handleclear = () => {
    setgriev("");
  };
  return (
    <div>
      <Navbar />
      <Container>
        <div className="pageheading">Post Grievances</div>
        <div className="form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicblog">
              <Form.Label>
                <h3 style={{ fontWeight: "700" }}>
                  Please share your Grievances here
                </h3>
              </Form.Label>
              <Form.Control
                value={griev}
                as="textarea"
                rows={10}
                placeholder="Share your grievance here"
                onChange={(e) => setgriev(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{ margin: "10px" }}
              variant="primary"
              type="submit"
              onClick={(e) => {
                handlegrievsubmit(e);
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
              {msg}
            </Alert>
          {grievres != [] && grievres.status == 400 ? (
            <Alert key="alert" variant="alert">
              {grievres.message}
            </Alert>
          ) : (
            <div></div>
          )}
        </div>
      </Container>
    </div>
  );
};
export default PostGrievance;
