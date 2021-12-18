import React, { useState,useEffect } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button } from "react-bootstrap";

const Postblog = ()=>{
const [blogs,setblogs]=usestate([]);
const [blogres,setblogres]=usestate("");
let body = {
    username: username,
    state: State,
    district: District
  };
  useEffect(()=>{
        fetch("/api/view_blog_local",{
            method: "POST",
            body:JSON.stringify(body),
        }).then(res=>res.json()).then((data)=>{
            setblogs(data);
        })
  },[]);

return (
<div>
<Navbar />
<Container>
<div className="view-blog">
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</div>    
</Container>
</div>
);
}