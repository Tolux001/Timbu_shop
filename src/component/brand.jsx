import React from "react";
import "../styles/navbar.css";

const Brand = () => {
	return (
		<div className="nav--brand">
			<img src="/logo.svg" alt="Timbu-Shop Logo" />
			<h1>
				Timbu<span style={{ color: "#2C3E50" }}>Shop</span>
			</h1>
		</div>
	);
};

export default Brand;
