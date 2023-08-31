import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import NavBar from "../components/AppNavBar";
import Container from "react-bootstrap/Container";
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
		</>
	);
};

export default Landing;
