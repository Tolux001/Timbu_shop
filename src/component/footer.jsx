import React from "react";
import Brand from "./brand";
import Button from "./button";

const Footer = () => {
	const dateYear = new Date().getFullYear();
	return (
		<>
			<footer>
				<div className="footer">
					<div className="footer-left">
						<h1>Like what you see?</h1>
						<Button content="Shop Now" hero="hero--btn" />
					</div>
					<div className="footer-right">
						<Brand />
						<ul>
							<li style={{ color: "#ff6f61" }}>Home</li>
							<li>Shop</li>
							<li>About</li>
							<li>Contact</li>
						</ul>
					</div>
				</div>
				<div className="dateTime">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none">
							<path
								d="M15.8401 12.1866C17.5467 12.2666 17.9867 13.72 18.0134 14.4H20.4001C20.2934 11.76 18.4134 10.1466 15.8001 10.1466C12.8534 10.1466 10.6667 12 10.6667 16.1866C10.6667 18.7733 11.9067 21.84 15.7867 21.84C18.7467 21.84 20.3334 19.64 20.3734 17.9066H17.9867C17.9467 18.6933 17.3867 19.7466 15.8134 19.8266C14.0667 19.7733 13.3334 18.4133 13.3334 16.1866C13.3334 12.3333 15.0401 12.2133 15.8401 12.1866ZM16.0001 2.66663C8.64008 2.66663 2.66675 8.63996 2.66675 16C2.66675 23.36 8.64008 29.3333 16.0001 29.3333C23.3601 29.3333 29.3334 23.36 29.3334 16C29.3334 8.63996 23.3601 2.66663 16.0001 2.66663ZM16.0001 26.6666C10.1201 26.6666 5.33341 21.88 5.33341 16C5.33341 10.12 10.1201 5.33329 16.0001 5.33329C21.8801 5.33329 26.6667 10.12 26.6667 16C26.6667 21.88 21.8801 26.6666 16.0001 26.6666Z"
								fill="#848383"
							/>
						</svg>
						<p>{dateYear}</p>
					</span>
					<p style={{ color: "#848383" }}>TimbuShop- All Right Reserved.</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
