import React, { useState } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button, Alert, Breadcrumb } from "react-bootstrap";

const Postblog = () => {
  const [blog, setblog] = useState("");
  const [blogres, setblogres] = useState([]);
  const [msg,setmsg]=useState("");
  let body = {
    username: localStorage.getItem("username"),
    state: localStorage.getItem("state"),
    district: localStorage.getItem("district"),
    blog: blog,
  };
  const handleblogsubmit = (e) => {
    e.preventDefault();
    fetch("/api/post_blog", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setblogres(data);
        if(data.status===200){
          setmsg(data.message)
        }
        console.log(data);
      });
  };
  const handleclear = () => {
    setblog("");
  };
  return (
    <div>
      <Navbar />
      <Container>
        <Breadcrumb className="bread-item">
          <Breadcrumb.Item href="/myblogs">My blogs</Breadcrumb.Item>
          <Breadcrumb.Item href="/viewblogs">View blogs</Breadcrumb.Item>
          <Breadcrumb.Item active href="/postblogs">
            Post blogs
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="pageheading">Post Blog</div>
        <div className="form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicblog">
              <Form.Label>
                <h3 style={{ fontWeight: "700" }}>
                  Please share your experience here
                </h3>
              </Form.Label>
              <Form.Control
                value={blog}
                as="textarea"
                rows={10}
                placeholder="Share your experience here"
                onChange={(e) => setblog(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{ margin: "10px" }}
              variant="primary"
              type="submit"
              onClick={(e) => {
                handleblogsubmit(e);
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
          {blogres != [] && blogres.status == 400 ? (
            <Alert key="alert" variant="alert">
              {blogres.message}
            </Alert>
          ) : (
            <div></div>
          )}
        </div>
      </Container>
    </div>
  );
};
export default Postblog;
