import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { Container, Form, Button } from "react-bootstrap";

const Signup = () => {
  const [States, setStates] = useState([]);
  const [Districts, setDistricts] = useState([]);
  const [Aadhar, setAadhar] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, seterror] = useState("");
  const [Username, setUsername] = useState("");
  const [Category, setCategory] = useState("");
  const [State, setState] = useState("");
  const [District, setDistrict] = useState("");
  const [resp, setresp] = useState([]);

  const [msg, setmsg] = useState("");
  useEffect(() => {
    fetch("/api/states")
      .then((res) => res.json())
      .then((data) => setStates(data.states));
  }, []);
  const getDistricts = (s) => {
    fetch("/api/districts", {
      method: "POST",
      body: JSON.stringify({ state: s }),
    })
      .then((res) => res.json())
      .then((data) => setDistricts(data.district));
  };
  const validatePass = () => {
    if (Password !== confirmPassword) {
      seterror("Passwords dont match");
    } else {
      seterror("");
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    let body = {
      username: Username,
      password: Password,
      aadhar: Aadhar,
      category: Category,
      state: State,
      district: District,
    };
    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setresp(data);
        console.log(data);
        if (data.status === 200) {
          setmsg("Redirecting in 3 seconds");
          // setTimeout(() => {}, 3000);
        }
      });
  };
  if (States === []) {
    return <div>waiting</div>;
  }
  return (
    <div>
      <Navbar />
      <Container>
        <div className="form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=" Confirm Password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  validatePass();
                }}
              />
              <Form.Text className="text-muted">{error}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAadhaar">
              <Form.Label>Aadhar number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Aadhar number"
                onChange={(e) => setAadhar(e.target.value)}
              />
              <Form.Text className="text-muted">
                Your Aadhar Number is secured with Us.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Select Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Open this select menu</option>
                <option value="Governament">Governament</option>
                <option value="Farmer">Farmer</option>
                <option value="Private_Sector">Private Sector</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicState">
              <Form.Label>Select State</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setState(e.target.value);
                  getDistricts(e.target.value);
                }}
              >
                {States.map((s) => {
                  return <option value={s}>{s}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDistrict">
              <Form.Label>Select District</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
              >
                {Districts.map((s) => {
                  return <option value={s}>{s}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                handlesubmit(e);
              }}
            >
              Sign Up
            </Button>
            {/* <Alert key="success" variant="success">
              {msg}
            </Alert> */}
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
