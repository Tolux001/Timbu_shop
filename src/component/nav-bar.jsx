import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Brand from "./brand";
import "../styles/navbar.css";
import "../index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<header>
			<nav className="nav">
				<Brand />
				<div className="nav--link">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/cart" style={{ color: "#ff6f61" }}>
								Shop
							</Link>
						</li>
						<li>
							<Link href="">About</Link>
						</li>
						<li>
							<Link href="">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="nav--cart">
					<img src="/log.png" alt="Prop-to-be-filled" />
					<FontAwesomeIcon icon={faCartShopping} />
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
