import React from "react";
import NavBar from "../component/nav-bar";
import HeroSection from "../component/hero-section";
import SortSection from "../component/sortSection";
import Footer from "../component/footer";
import "../index.css";

const App = () => {
	return (
		<>
			<NavBar />
			<main>
				<HeroSection />
				<SortSection />
			</main>
			<Footer />
		</>
	);
};

export default App;
