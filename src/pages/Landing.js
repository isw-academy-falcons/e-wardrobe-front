import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import NavBar from "../components/AppNavBar";
import HeroImage from "../images/landing/hero-image.svg";

const Landing = () => {
	return (
		<>
			<NavBar />
			{/* Generate Outfit Section */}
			<Container>
				<Row>
					<Col className="mt-5 generate-outfit-text" lg={true}>
						<p>Style Harmony Awaits: Your Personalized <span style={{color: "#02C5BB"}}>Outfit Matches</span> Just a Click Away</p>
						<Button variant="dark" className="button-width">Generate Outfit</Button>
					</Col>
					<Col lg={true} className="hero-image">
						<img src={HeroImage} alt="Hero Avatar" height="428px" />
					</Col>
				</Row>
			</Container>
			{/* E-wardrobe Access */}
			<section className="e-wardrobe-background">
				<Container>
					<Row>
						<Col>
							<p className="e-wardrobe-header">Access Your E-Wardrobe</p>
							<p className="e-wardrobe-text">Elevate your fashion game with our cutting-edge e-wardrobe. Seamlessly mix, match, and amplify your creativity, defining the era of individualized style.</p>
							<Button variant="outline-warning" className="button-width-e-wardrobe mb-4">Explore E-Wardrobe</Button>
						</Col>
						<Col></Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Landing;
