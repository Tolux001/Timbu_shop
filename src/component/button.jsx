import React from "react";
import "../index.css";

const Button = ({ content, hero }) => {
	return (
		<>
			<button className={`btn ${hero}`}>{content}</button>
		</>
	);
};

export default Button;
