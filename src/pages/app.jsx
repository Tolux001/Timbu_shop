import React from "react";
import HeroSection from "../component/hero-section";
import SortSection from "../component/sortSection";
import Footer from "../component/footer";
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
