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
import { Container, Form, Button, Alert } from "react-bootstrap";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCfKzWSxw5KYzbBwuEC9wQGqTQItPEdcUQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `90vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(
    () => ({
      isTamil: true,
    }),
    {
      onToggleTamil:
        ({ isTamil }) =>
        () => ({
          isTamil: !isTamil,
        }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={4.8} defaultCenter={{ lat: 20.5937, lng: 78.9629 }}>
    {/* <Marker
      position={{ lat: 11.059821, lng: 78.387451 }}
      onClick={props.onToggleTamil}
    >
      {props.isTamil && (
        <InfoWindow onCloseClick={props.onToggleTamil}>Tamil Nadu</InfoWindow>
      )}
    </Marker> */}
    ;
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
