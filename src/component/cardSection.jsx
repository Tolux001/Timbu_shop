import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const CardSection = ({ img, name, price, number }) => {
	return (
		<>
			<div className="grid-card">
				<li>
					<img src={img} alt={name} />
					<div className="grid-card-container">
						<div className="grid-card-text">
							<p className="card-section-name">{name}</p>
							<p style={{ marginTop: "12px" }} className="card-section-star">
								{number == 5 && "⭐⭐⭐⭐⭐"}
								{number == 4 && "⭐⭐⭐⭐"}
								{number == 3 && "⭐⭐⭐"}
							</p>
						</div>
						<h6 style={{ marginTop: "8px" }}>{price}</h6>
					</div>
					<div className="card-section-btn">
						<Link to="details">
							<button className="card-btn btn-view">Quick View</button>
						</Link>
						<button className="card-btn btn-cart">Add to Cart</button>
					</div>
				</li>
			</div>
		</>
	);
};

export default CardSection;
