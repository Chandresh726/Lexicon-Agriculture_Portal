import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import Navbar from "./NavBar";

const EachState = () => {
  const location = useLocation();
  let arr = location.pathname.split("/");
  let State = arr[2];
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <img src={"/states_img/" + State + ".png"} className="state_img" />
          </Col>
          <Col>
            <h3 style={{ margin: "25px", textAlign: "center" }}>
              Data of {State}
            </h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>SI.No.</th>
                  <th>Components</th>
                  <th>NHM Physical Achievement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Area Coverage</td>
                  <td>1515</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Green House Structure</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Shade Net House</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Community tanks/on farm ponds etc.</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Water Harvesting system for individuals</td>
                  <td>82</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Integrated pack house</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Cold Storage</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Ripening Chambers</td>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EachState;
