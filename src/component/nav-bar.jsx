import React, { useState } from "react";
import { Link } from "react-router-dom";
import Brand from "./brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";
import "../index.css";

const NavBar = () => {
	const [cart, setCart] = useState(0);
	const activeState = cart > 0 ? "active-cart" : "";
	const increaseBtn = () => {
		setCart((cart) => cart + 1);
	};

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
						{/* <button onClick={increaseBtn}>Test</button> */}
					</ul>
				</div>
				<div className="nav--cart">
					<img
						src="/log.png"
						alt="Prop-to-be-filled"
						title="Props to be filled"
					/>
					<div>
						<span className={`group ${activeState}`}>{cart}</span>
						<Link to="/cart">
							<FontAwesomeIcon icon={faCartShopping} className="cartShopping" />
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
