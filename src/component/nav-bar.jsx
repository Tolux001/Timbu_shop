import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";
import Brand from "./brand";
import "../index.css";

const NavBar = () => {
	return (
		<nav className="nav">
			<Brand />
			<div className="nav--link">
				<ul>
					<li>Home</li>
					<li style={{ color: "#ff6f61" }}>Shop</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className="nav--cart">
				<img src="/log.png" alt="Prop-to-be-filled" />
				<FontAwesomeIcon icon={faCartShopping} size="2x" />
			</div>
		</nav>
	);
};

export default NavBar;
