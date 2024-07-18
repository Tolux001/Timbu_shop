import React, { useState } from "react";
import NavBar from "../component/nav-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faTrash } from "@fortawesome/free-solid-svg-icons";
import items from "../component/item";

const Cart = () => {
	return (
		<>
			<NavBar />
			<main>
				<section className="cart-section">
					<FontAwesomeIcon icon={faArrowLeftLong} />
					<div className="cart">
						<h3>Cart Items</h3>
						<SingleItem />
					</div>
				</section>
			</main>
		</>
	);
};

const SingleItem = () => {
	const arrItem = items[0];
	const [count, setCount] = useState(1);
	const [remove, setRemove] = useState(true);

	const deleteArr = () => {
		setRemove(() => !remove);
	};
	const previousButton = () => {
		if (count > 1) {
			setCount(() => count - 1);
		}
	};
	const nextButton = () => {
		if (count < 10) {
			setCount(() => count + 1);
		}
	};
	return (
		<div className="cart-content">
			<div className="cart-img">
				<img src={arrItem.img} alt={arrItem.name} />
			</div>
			{remove && (
				<div className="cart-details">
					<div className="details-one">
						<h5>{arrItem.name}</h5>
						<p>Size {arrItem.size}</p>
						<div>
							<p>Colors </p>
							<span
								style={{ color: arrItem.color }}
								className="color-shape"></span>
						</div>
						<h3>{`$ ${arrItem.price}`}</h3>
					</div>
					<div className="details-two">
						<div>
							<button onClick={previousButton} className="math">
								-
							</button>
							<p>{count}</p>
							<button onClick={nextButton} className="math">
								+
							</button>
						</div>
						<button onClick={deleteArr} className="delete">
							<FontAwesomeIcon icon={faTrash} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
