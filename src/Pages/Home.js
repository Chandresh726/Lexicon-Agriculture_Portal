import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import {
  Container,
  Row,
  Col,
  Card,
  Carousel,
  Button,
  Collapse,
} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import ReactAudioPlayer from "react-audio-player";

const Home = () => {
  const [notice, setNotice] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/api/getNotice", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setNotice(data));
  }, []);

  const printNotice = () => {
    const data = [];
    if (notice[0] == 0) {
      data.push(<Card.Title>No Notice Available</Card.Title>);
    } else {
      for (var i = 1; i <= notice[0]; i++) {
        data.push(
          <div>
            <Card.Text style={{ textAlign: "center" }}>
              <div style={{ textAlign: "left", marginBottom: "10px" }}>
                {notice[i].subject}
              </div>
              <Button
                target="_blank"
                href={notice[i].link}
                variant="outline-info"
                style={{ padding: "5px", width: "100%" }}
              >
                Visit
              </Button>
              <hr />
            </Card.Text>
          </div>
        );
      }
    }
    return data;
  };
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
        <Row style={{ marginBottom: "10px" }}>
          <Col xs={12} sm={3} md={3} lg={3}>
            <Card border="danger" style={{ margin: "0px", height: "100%" }}>
              <Card.Header>Important Links</Card.Header>
              <Card.Body>{printNotice()}</Card.Body>
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
        <Row>
          <Col>
            <h3>To Listen About Our Website </h3>{" "}
            <ReactAudioPlayer src="text_speech.mp3" controls autoPlay />
            <Card style={{ margin: "20px 0" }}>
              <Card.Body>
                Welcome to the Kisan webportal. This website is build with the
                sole motivation of helping the agricultural community of India.
                Where the Farmers community,Government,private sector's can
                benifit from this website. Many useful featurs like crop related
                information,crop related querries,crop prices,national
                statistics,important information can be known to the farmers.
                Farmers can also submit their grievance's which will be viewed
                the government officials of the farmers state. Farmers,private
                sector,government can view and write blogs and share their
                experience. Farmer can view crop prices in graphical
                representation which are updated by private sector at regular
                interval. In selfservice user can change their password. User
                can also view national details just by selecting state on the
                map. Hope all the features help all the user to benifit the
                most. For any suggestions please submit feedback.
                <div>
                  <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    Hindi
                  </Button>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      किसान वेबपोर्टल में आपका स्वागत है। यह वेबसाइट के साथ
                      निर्मित है भारत के कृषि समुदाय की मदद करने की एकमात्र
                      प्रेरणा। जहां किसान समुदाय, सरकार, निजी क्षेत्र के कर सकते
                      हैं इस वेबसाइट से लाभ उठाएं। फसल से संबंधित कई उपयोगी
                      सुविधाएँ जानकारी, फसल से संबंधित प्रश्न, फसल की कीमतें,
                      राष्ट्रीय सांख्यिकी, किसानों को महत्वपूर्ण जानकारी ज्ञात
                      हो सकती है। किसान अपनी शिकायत भी दर्ज करा सकते हैं जिसे
                      देखा जाएगा किसान राज्य के सरकारी अधिकारी। किसान, निजी
                      क्षेत्र, सरकार ब्लॉग देख और लिख सकती है और उन्हें साझा कर
                      सकती है अनुभव। किसान फसल की कीमतों को ग्राफिकल में देख
                      सकते हैं प्रतिनिधित्व जो नियमित रूप से निजी क्षेत्र द्वारा
                      अद्यतन किया जाता है मध्यान्तर। स्वयं सेवा में उपयोगकर्ता
                      अपना पासवर्ड बदल सकता है। उपयोगकर्ता केवल राज्य का चयन
                      करके राष्ट्रीय विवरण भी देख सकते हैं नक्शा। आशा है कि सभी
                      सुविधाएँ सभी उपयोगकर्ता को इसका लाभ उठाने में मदद करेंगी
                      अधिकांश। किसी भी सुझाव के लिए कृपया प्रतिक्रिया भेजें।
                    </div>
                  </Collapse>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
