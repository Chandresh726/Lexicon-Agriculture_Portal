import React, { useState,useEffect } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button,Breadcrumb,Card } from "react-bootstrap";

const Viewblogs = ()=>{
const [blogs,setblogs]=useState({});
const [blogres,setblogres]=useState("");
let body = {
    username: localStorage.getItem("username"),
    state: localStorage.getItem("state"),
    district: localStorage.getItem("district"),
  };
  useEffect(()=>{
        fetch("/api/view_blog_local",{
            method: "POST",
            body:JSON.stringify(body),
        }).then(res=>res.json()).then((data)=>{
            setblogs(data);
            console.log(data);
        })
  },[]);
  const printcard=()=>{
const cards=[];
for(var i=1;i<=blogs[0];i++){
cards.push(    
<Card style={{ minwidth: '100%',height:'150px',margin:'10px' }}>
<Card.Body>
  <Card.Title>{blogs[i].username}</Card.Title>
  <Card.Text>
    {blogs[i].blog}
  </Card.Text>
</Card.Body>
</Card>)
}
return cards;
  };

return (
<div>
<Navbar />
<Container>
<Breadcrumb className="bread-item">
        <Breadcrumb.Item  href="/myblogs">My blogs</Breadcrumb.Item>
        <Breadcrumb.Item  active href="/viewblogs">View blogs</Breadcrumb.Item>
        <Breadcrumb.Item  href="/postblogs">Post blogs</Breadcrumb.Item>
</Breadcrumb>
<div className="pageheading">View Blogs</div>
<div className="view-blog">
  {printcard()}

  
</div>    
</Container>
</div>
);
}
export default Viewblogs;