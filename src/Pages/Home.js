import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Home = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <Navbar />
      <Marquee
        pauseOnHover={true}
        speed={60}
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        Welcome to Kisan Portal. Follow this portal for Regular Updates
      </Marquee>
      <Container>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col xs={12} sm={3} md={3} lg={3}>
            <Card border="danger" style={{ margin: "0px", height: "100%" }}>
              <Card.Header>Recent News</Card.Header>
              <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="lexicon_images/1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Farmer Ploughing Fields</h3>
                  <p>
                    Agriculture is the noblest of all alchemy; for it turns
                    earth, and even manure, into gold, conferring upon its
                    cultivator the additional reward of health
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="lexicon_images/2.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Fresh Vegetables</h3>
                  <p>
                    The ultimate goal of farming is not the growing of crops,
                    but the cultivation and perfection of human beings
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="lexicon_images/3.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Organic Crops</h3>
                  <p>
                    If you tickle the earth with a hoe she laughs with a
                    harvest.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="lexicon_images/4.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Ready to sell Vegetables</h3>
                  <p>
                    The discovery of agriculture was the first big step toward a
                    civilized life.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="lexicon_images/5.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Paddy Feilds</h3>
                  <p>
                  Know you food, know your farmers, and know your kitchen.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;