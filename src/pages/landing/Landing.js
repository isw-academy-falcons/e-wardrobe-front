import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import Container from "react-bootstrap/Container";

import "./Landing.css";
import Footer from "../../components/Footer";
import TrendingOutfits from "./TrendingOutfits";
import AppNavBar from "../../components/AppNavBar";
import { FaLongArrowAltRight } from "react-icons/fa";
import HeroImage from "../../assets/images/landing/hero-image.svg";
import FashionStyles from "../../assets/images/landing/fashion-pictures.svg";
import TestimonialContainer from "../../assets/images/landing/testimonial-container.svg";

const Landing = () => {
  const navigate = useNavigate();
  // Handle button click function for outfit generation
  const handleGenerateOutfitClick = () => {
    navigate("/outfit-generator");
  };

	return (
    <>
      {/* Navigation Bar */}
      <AppNavBar />
      {/* Generate Outfit Section */}
      <Container>
        <Row>
          <Col className="mt-5 generate-outfit-text" lg={true}>
            <p>
              Style Harmony Awaits: Your Personalized{" "}
              <span style={{ color: "#02C5BB" }}>Outfit Matches</span> Just a
              Click Away
            </p>
            <Button
              variant="dark"
              className="button-width"
              onClick={handleGenerateOutfitClick}
            >
              Generate Outfit
            </Button>
          </Col>
          <Col lg={true} className="hero-image">
            <img src={HeroImage} alt="Hero Avatar" height="428px" />
          </Col>
        </Row>
      </Container>
      {/* Trending Outfit Section */}
      <Container>
        <h1 className="text-center trending-outfit-text">
          Trending Outfits of The week
        </h1>
        <Row>
          <Col></Col>
          <Col>
            <p className="text-center trending-outfit-content">
              Get ready to slay the fashion game with this week's hottest
              trends! From street style to elegant ensembles, here are the
              must-have outfits that are turning heads and setting the style bar
              high
            </p>
          </Col>
          <Col></Col>
        </Row>
        <section className="slide-container">
          <Slide slidesToScroll={1} slidesToShow={3} indicators={true}>
            {TrendingOutfits.map((trendingOutfit) => (
              <div key={trendingOutfit.url}>
                <div
                  className="trending-outfit-images"
                  style={{ backgroundImage: `url(${trendingOutfit.url})` }}
                ></div>
              </div>
            ))}
          </Slide>
        </section>
      </Container>
      {/* Styles */}
      <Container>
        <h3 className="text-center landing-header">DISCOVER STYLES</h3>
        <Row className="styles-content">
          <Col lg={true} className="hero-image">
            <img height="484.2px" src={FashionStyles} alt="Fashion Styles" />
          </Col>
          <Col lg={true}>
            <h4 className="styles-header1">
              Your Passport to Unlimited PICTURES OF Fashion Outfits
            </h4>
            <p className="styles-text">
              Experience fashion without bounds with our exclusive offer.
              Explore an expansive collection of trend-setting outfits, curated
              to elevate your style journey. Embrace endless inspiration and
              elevate your wardrobe like never before.
            </p>
            <p className="unlock-styles">
              UNLOCK STYLES NOW
              <FaLongArrowAltRight className="arrow-right" size="48px" />
            </p>
          </Col>
        </Row>
      </Container>
      {/* E-wardrobe Access */}
      <section>
        <Row>
          <Col className="aside-background" xs={4}></Col>
          <Col xs={8} className="e-wardrobe-background">
            <h3 className="e-wardrobe-header" style={{ marginLeft: "50px" }}>
              Access Your E-Wardrobe
            </h3>
            <p className="e-wardrobe-text" style={{ marginLeft: "50px" }}>
              Elevate your fashion game with our cutting-edge e-wardrobe.
              Seamlessly mix, match, and amplify your creativity, defining the
              era of individualized style.
            </p>
            <Button
              variant="outline-warning"
              style={{ marginLeft: "50px" }}
              className="button-width-e-wardrobe mb-5"
            >
              Explore E-Wardrobe
            </Button>
          </Col>
        </Row>
      </section>
      {/* Testimonials */}
      <h3 className="text-center landing-header">Testimonials</h3>
      <section className="testimonials-background text-white hero-image">
        <img
          height="172.5px"
          src={TestimonialContainer}
          alt="Testimonial Container"
          className="testimonials-image"
        />
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Landing;
