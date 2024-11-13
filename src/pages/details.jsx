import React from "react";
import items from "../component/item";
import NavBar from "../component/nav-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/details_cart.css";

const Details = () => {
	const arrItem = items[10];
	return (
		<>
			<NavBar />
			<main className="cart-main">
				<section className="details-section">
					<Link to="/">
						<FontAwesomeIcon icon={faArrowLeftLong} />
					</Link>
					<img className="details-image" src={arrItem.img} alt={arrItem.name} />
					<div className="detail-details">
						<h2>{arrItem.name}</h2>
						<span className="numbers">
							<p>
								{arrItem.number == 5
									? "⭐⭐⭐⭐⭐"
									: arrItem.number == 4
									? "⭐⭐⭐⭐"
									: arrItem.number == 3
									? "⭐⭐⭐"
									: ""}
							</p>
							<p>
								{arrItem.rating}
								{"  "} Reviews
							</p>
						</span>
						<h2>${arrItem.price}</h2>
						<ul>
							<li
								style={{
									fontSize: "20px",
									color: "#8f9498",
								}}>
								Size
							</li>
							<li className="active-size">42</li>
							<li>32</li>
							<li>38</li>
							<li>40</li>
						</ul>
						<span className="color-ministry">
							<h6>Colors available</h6>
							<span
								style={{ background: "rgb(31, 56, 185)" }}
								className="color-shape"></span>
							<span
								style={{ background: "rgb(27, 28, 33)" }}
								className="color-shape"></span>
							<span
								style={{ background: "rgb(133, 22, 82)" }}
								className="color-shape"></span>
							<span
								style={{ background: "#8f9498" }}
								className="color-shape active-sharp"></span>
						</span>
						<Link to="/cart">
							<button className="cart">Add To Cart</button>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
};

export default Details;
