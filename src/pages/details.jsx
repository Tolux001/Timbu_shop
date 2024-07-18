import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import items from "../component/item";
import NavBar from "../component/nav-bar";
import Button from "../component/button";
// import "../index.css";
import "../styles/details_cart.css";

const Details = () => {
	let arrItem = items[0];
	return (
		<>
			<NavBar />
			<main>
				<section className="details-section">
					<FontAwesomeIcon icon={faArrowLeftLong} />
					<img className="details-image" src={arrItem.img} alt={arrItem.name} />
					<div className="detail-details">
						<h2>{arrItem.name}</h2>
						<span>
							<p>{arrItem.number}</p>
							<p>{arrItem.rating} Reviews</p>
						</span>
						<h2>${arrItem.price}</h2>
						<ul>
							<li style={{ color: "#848383", fontSize: "16px" }}>Size</li>
							<li style={{ color: "#ff6f61" }}>42</li>
							<li>32</li>
							<li>38</li>
							<li>40</li>
						</ul>
						<span>
							<h6>Colors available</h6>
							<span style={{ color: "" }} className="color-shape"></span>
							<span style={{ color: "" }} className="color-shape"></span>
							<span style={{ color: "" }} className="color-shape"></span>
							<span style={{ color: "" }} className="color-shape"></span>
						</span>
						<Button content="Add To Cart" hero="hero--btn" />
					</div>
				</section>
			</main>
		</>
	);
};

export default Details;
