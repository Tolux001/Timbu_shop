import React from "react";
import "../index.css";

const Button = ({ clicker, content, hero }) => {
	return (
		<>
			<button onClick={clicker} className={`btn ${hero}`}>
				{content}
			</button>
		</>
	);
};

export default Button;
