import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button, Breadcrumb, Card } from "react-bootstrap";

const Viewgraph = () => {
  const [crops, setcrops] = useState({});
  const [crop, setcrop] = useState("");
  const [isgraph, setisgraph] = useState({});
  useEffect(() => {
    fetch("/api/get_crop_names")
      .then((res) => res.json())
      .then((data) => {
        setcrops(data);
      });
  }, []);
  const handlecropsubmit = (e) => {
    e.preventDefault();
    let body = {
      cropname: crop,
    };
    fetch("/api/show_crop_graph", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setisgraph(data);
      });
  };
  const getoptions = () => {
    const cards = [];
    if (crops[0] == 0) {
      cards.push(<h3 className="pageheading">No crops available</h3>);
    } else {
      console.log(crops.size);
      for (var i = 1; i <= crops[-1]; i++) {
        cards.push(
          <option value={crops[i].cropname}>{crops[i].cropname}</option>
        );
      }
    }
    return cards;
  };
  return (
    <div>
      <Navbar />
      <Container>
        <div className="form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setcrop(e.target.value)}
              >
                <option>Select Crop</option>
                {getoptions()}
              </Form.Select>
            </Form.Group>
            <Button
              style={{ margin: "10px" }}
              variant="primary"
              type="submit"
              onClick={(e) => {
                handlecropsubmit(e);
              }}
            >
              Get graph
            </Button>
          </Form>
        </div>
        <img src="/crop_graph.jpg" />
        {/* {isgraph==="1"?} */}
      </Container>
    </div>
  );
};
export default Viewgraph;
