import React, { useState } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Postgraph=()=>{
const [crop,setcrop]=useState("");
const [date,setdate]=useState("");
const [rate,setrate]=useState("");
const [msg,setmsg]=useState("");
const [res,setres]=useState("")
const handlegraphsubmit=(e)=>{
  e.preventDefault();
  let body={
    cropname:crop,
    price:rate,
    date:date
  }
    fetch("/api/post_crop_rates",{
        method:"POST",
        body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.status==200){
        setmsg(data.message)
        setres(data);
      }
    })
}

    return (
        <div>
            <Navbar/>
            <Container>
            <div className="pageheading">Post Crop rates</div>
            <div className="form">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicCrop">
              <Form.Label>Crop name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Crop name"
                onChange={(e) => setcrop(e.target.value)}
              />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicRate">
              <Form.Label>Crop rate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Crop rate"
                onChange={(e) => setrate(e.target.value)}
              />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date"
                onChange={(e) => setdate(e.target.value)}
              />
              </Form.Group>
            <Button
              style={{ margin: "10px" }}
              variant="primary"
              type="submit"
              onClick={(e) => {
                handlegraphsubmit(e);
              }}
            >
              POST
            </Button>
            
          </Form>
          <Alert key="success" variant="success">
              {msg}
            </Alert>
          {res != [] && res.status == 400 ? (
            <Alert key="alert" variant="alert">
              {res.message}
            </Alert>
          ) : (
            <div></div>
          )}
        </div>
             </Container>   
         </div>   

    );
}
export default Postgraph;