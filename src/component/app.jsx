import React from "react";
import HeroSection from "./hero-section";
import SortSection from "./sortSection";
import Footer from "./footer";
import "../index.css";

const App = () => {
	return (
		<>
			<div className="main--container">
				<HeroSection />
				<main>
					<SortSection />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default App;
