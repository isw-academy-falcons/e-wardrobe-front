import "./styles/Login.css";
import MySvg3 from "./assets/images/illustration3.svg";
import MySvg4 from "./assets/images/illustration4.svg";

export default function Pricing() {
  return (
    <div className="pricing-parent-body">
      <h1 className="pricing-header">Unlock Your Wardrobe's Potential</h1>
      <img className="illustration3" src={MySvg3} alt="SVG" />
      <img className="illustration4" src={MySvg4} alt="SVG" />
      <div className="pricing-container-style">
        <div className="pricing-container spacing">
          <h2>Free</h2>
          <ul>
            <li>Basic Outfit Suggestions</li>
            <li>Limited Outfit Matches</li>
            <li>Ad-Supported</li>
            <li>Limited Style Preferences</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className="pricing-container">
          <h2>Premium</h2>
          <ul>
            <li>Advanced Outfit Suggestions</li>
            <li>Unlimited Outfit Matches</li>

            <li>Seasonal Trend Alerts</li>
            <li>Ad-Free Experience</li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
