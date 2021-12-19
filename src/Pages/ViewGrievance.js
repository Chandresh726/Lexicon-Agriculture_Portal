import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button, Breadcrumb, Card } from "react-bootstrap";

const ViewGrievance = () => {
  const [griev, setgriev] = useState({});
  const [grievres, setgrievres] = useState("");
  const [msg, setmsg] = useState("");
  let body = {
    username: localStorage.getItem("username"),
    state: localStorage.getItem("state"),
    district: localStorage.getItem("district"),
  };
  useEffect(() => {
    fetch("/api/view_grievance", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setgriev(data);
        console.log(data);
      });
  }, []);

  const printcard = () => {
    const cards = [];
    if (griev[0] == 0) {
      cards.push(<h3 className="pageheading">No Grievances available</h3>);
    } else {
      for (var i = 1; i <= griev[0]; i++) {
        let blog = griev[i].blog;
        cards.push(
          <Card style={{ minwidth: "100%", height: "150px", margin: "10px" }}>
            <Card.Body>
              <Card.Title>
                {griev[i].username}&nbsp;{griev[i].aadhar}(Aadhar)
              </Card.Title>
              <Card.Text>{blog}</Card.Text>
              <Button
                onClick={() => {
                  let body = {
                    username: localStorage.getItem("username"),
                    state: localStorage.getItem("state"),
                    district: localStorage.getItem("district"),
                    info: blog,
                    aadhar: localStorage.getItem("aadhar"),
                  };
                  // console.log(JSON.stringify(body));
                  fetch("/api/delete_grievance", {
                    method: "POST",
                    body: JSON.stringify(body),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.status === 200) {
                        setmsg(data.message);
                        window.location.reload();
                      }
                    });
                }}
                variant="outline-info"
                style={{ padding: "5px", width: "100%" }}
              >
                Marks as Complete
              </Button>
            </Card.Body>
          </Card>
        );
      }
    }
    return cards;
  };

  return (
    <div>
      <Navbar />
      <Container>
        <div className="pageheading">View Grievances</div>
        <div className="view-blog">{printcard()}</div>
      </Container>
    </div>
  );
};
export default ViewGrievance;
