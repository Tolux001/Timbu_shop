import React, { useState } from "react";
import NavBar from "../component/nav-bar";
import CardSection from "../component/cardSection";
import items from "../component/item";
import Button from "../component/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeftLong,
	faTrash,
	faArrowRight,
	faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/details_cart.css";

const Cart = () => {
	const arrItems = items;
	const arrItem = items[0];
	const deliveryPrice = 50;
	const totalPrice = 850;
	return (
		<>
			<NavBar />
			<main className="cart-main">
				<section className="cart-section">
					<Link to="/">
						<FontAwesomeIcon icon={faArrowLeftLong} size="2xl"/>
					</Link>
					<h3>Cart Items</h3>
					<div className="cart">
						<SingleItem />
					</div>
					<section className="math-section">
						<div>
							<h5>Sub Total</h5> <h2>${arrItem.price}</h2>{" "}
						</div>
						<div>
							<h5>Delivery</h5> <h2>${deliveryPrice}</h2>{" "}
						</div>
						<div>
							<h5>Total</h5> <h2>${totalPrice}</h2>{" "}
						</div>
					</section>
					<div className="checkoutBtn">
						<Link to="/checkOut">
							<Button hero="btn-check btn-c" content="Check Out" />
						</Link>
						<Link to="/">
							<Button hero="btn-shop btn-c" content="Continue Shopping" />
						</Link>
					</div>
				</section>
				<section className="recommendation">
					<h2>Recommended Items</h2>
					<div className="component-card-section">
						<ul className="cart-grid">
							{arrItems.slice(6, 9).map((item) => (
								<CardSection
									img={item.img}
									name={item.name}
									price={`$ ${item.price}`}
									number={item.number}
									key={item.name}
								/>
							))}{" "}
						</ul>
					</div>
				</section>
				<section className="number-sort-section">
					<div>
						<div style={{ color: "#ff6f61" }} className="caret-left">
							<FontAwesomeIcon icon={faArrowLeft} size="2xl" />
						</div>
						<div className="caret-number">
							<ul>
								<li className="active-caret-number">1</li>
								<li>2</li>
								<li>3</li>
								<li>4</li>
								<li>5</li>
								<li>6</li>
							</ul>
						</div>
						<div style={{ color: "#ff6f61" }} className="caret-right">
							<FontAwesomeIcon icon={faArrowRight} size="2xl" />
						</div>
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
		<>
			{remove && (
				<div className="cart-content">
					<div className="cart-img">
						<img src={arrItem.img} alt={arrItem.name} />
					</div>
					<div className="cart-details">
						<div className="details-one">
							<h5>{arrItem.name}</h5>
							<span>
								Size <p>{arrItem.size}</p>
							</span>
							<div>
								<p>Colors</p>
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
								<FontAwesomeIcon icon={faTrash} className="trash" />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Cart;
