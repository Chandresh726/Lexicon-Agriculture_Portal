import React, { useState } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button } from "react-bootstrap";

const Postblog = ()=>{
const [blog,setblog]=usestate("");
const [blogres,setblogres]=usestate("");
let body = {
    username: username,
    state: State,
    district: District,
    blog:blog
  };
const handleblogsubmit = (e)=>{
    e.preventDefault();
    fetch("/api/post_blog",{
        method:"POST",
        body:JSON.stringify(body),
    }).then((res)=>res.json()).then((data)=>{
        setblogres(data);
        console.log(data);
    })
}
const handleclear=()=>{
    setblog("");
}
return (
<div>
<Navbar />
<Container>
<div className="form">
    <Form>
    <Form.Group className="mb-3" controlId="formBasicblog">
              <Form.Label>Please share your experience here</Form.Label>
              <Form.Control
                value={blog}
                type="text-area"
                rows="5"
                placeholder="Enter Full Name Here"
                onChange={(e) => setblog(e.target.value)}
              />
        </Form.Group>
        <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                handleblogsubmit(e);
              }}
            >
              POST
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleclear();
              }}
            >
              Clear
            </Button>
     </Form>   
</div>
</Container>
</div>
);
}