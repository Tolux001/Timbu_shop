import React from "react";
import NavBar from "./nav-bar";
import Button from "./button";
import "../index.css";

const HeroSection = () => {
	return (
		<header>
			<NavBar />
			<div className="hero--section">
				<div className="hero--container" style={{ padding: "12px 16px" }}>
					<h1>
						Discover Our Latest{" "}
						<span style={{ color: "#ff6f61" }}>Arrivals!</span>
					</h1>
					<p style={{ color: "#fff" }}>
						Discover must-have essentials at unbeatable prices.
					</p>
					<Button content="ShopNow" hero="hero--btn" />
				</div>
			</div>
		</header>
	);
};

export default HeroSection;
