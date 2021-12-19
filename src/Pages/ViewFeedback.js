import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button, Breadcrumb, Card } from "react-bootstrap";

const ViewFeedback = () => {
  const [feedback, setfeedback] = useState({});
  const [feedbackres, setfeedbackres] = useState("");
  const [msg, setmsg] = useState("");
  let body = {
    username: localStorage.getItem("username"),
  };
  useEffect(() => {
    fetch("/api/view_feedback", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setfeedback(data);
        console.log(data);
      });
  }, []);

  const printcard = () => {
    const cards = [];
    if (feedback[0] == 0) {
      cards.push(<h3 className="pageheading">No Feedback available</h3>);
    } else {
      for (var i = 1; i <= feedback[0]; i++) {
        let blog = feedback[i].feedback;
        cards.push(
          <Card style={{ minwidth: "100%", height: "150px", margin: "10px" }}>
            <Card.Body>
              <Card.Title>
                {feedback[i].username}
              </Card.Title>
              <Card.Text>{blog}</Card.Text>
              <Button
                onClick={() => {
                  let body = {
                    state: localStorage.getItem("state"),
                    district: localStorage.getItem("district"),
                    feedback: blog,
                  };
                  // console.log(JSON.stringify(body));
                  fetch("/api/delete_feedback", {
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
                Marks as Read
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
        <div className="pageheading">View Feedback</div>
        <div className="view-feedback">{printcard()}</div>
      </Container>
    </div>
  );
};
export default ViewFeedback;
