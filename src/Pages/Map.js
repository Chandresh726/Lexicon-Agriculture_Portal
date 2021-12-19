import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { Container, Tooltip, OverlayTrigger } from "react-bootstrap";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCfKzWSxw5KYzbBwuEC9wQGqTQItPEdcUQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `92vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={4.8} defaultCenter={{ lat: 20.5937, lng: 78.9629 }}>
    <Marker
      position={{ lat: 11.059821, lng: 78.387451 }}
      onClick={() => {
        window.location.href = "http://localhost:3000/map/TamilNadu";
      }}
    ></Marker>
    <Marker
      position={{ lat: 17.123184, lng: 79.208824 }}
      onClick={() => {
        window.location.href = "http://localhost:3000/map/Telangana";
      }}
    ></Marker>
    <Marker
      position={{ lat: 22.2587, lng: 71.1924 }}
      onClick={() => {
        window.location.href = "http://localhost:3000/map/Gujarat";
      }}
    ></Marker>
    <Marker
      position={{ lat: 26.2006, lng: 92.9376 }}
      onClick={() => {
        window.location.href = "http://localhost:3000/map/Assam";
      }}
    ></Marker>
    <Marker
      position={{ lat: 29.238478, lng: 76.431885 }}
      onClick={() => {
        window.location.href = "http://localhost:3000/map/Haryana";
      }}
    ></Marker>
    <Marker
      position={{ lat: 31.1471, lng: 75.3412 }}
      onClick={() => {
        window.location.href = "http://localhost:3000/map/Punjab";
      }}
    ></Marker>
    <Marker
      position={{ lat: 15.9129, lng: 79.74 }}
      onClick={() => {
        window.location.href = "http://localhost:3000/map/AndhraPradesh";
      }}
    ></Marker>
    <Marker
      position={{ lat: 19.7515, lng: 75.7139 }}
      onClick={() => {
        window.location.href = "http://localhost:3000/map/Maharashtra";
      }}
    ></Marker>
    <Marker
      position={{ lat: 22.9734, lng: 78.6569 }}
      onClick={() => {
        window.location.href = "http://localhost:3000/map/MadhyaPradesh";
      }}
    ></Marker>
    <Marker
      position={{ lat: 10.8505, lng: 76.2711 }}
      onClick={() => {
        window.location.href = "http://localhost:3000/map/Kerala";
      }}
    ></Marker>
    <Marker
      position={{ lat: 15.3173, lng: 75.7139 }}
      onClick={() => {
        window.location.href = "http://localhost:3000/map/Karnataka";
      }}
    ></Marker>
    <Marker
      position={{ lat: 26.8467, lng: 80.9462 }}
      onClick={() => {
        window.location.href = "http://localhost:3000/map/UttarPradesh";
      }}
    ></Marker>
  </GoogleMap>
));

const Map = () => {
  const [markers, setmarkers] = useState([]);
  useEffect(() => {
    fetch("/api/get_markers")
      .then((res) => res.json())
      .then((data) => setmarkers(data));
  }, []);
  return (
    <div>
      <Navbar />
      <Container>
        <MyMapComponent markers={markers.data} />
      </Container>
    </div>
  );
};

export default Map;
