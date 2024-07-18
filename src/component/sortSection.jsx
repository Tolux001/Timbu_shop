import React from "react";
import CardSection from "./cardSection";
import items from "./item";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SortSection = () => {
	let arrItems = items;

	return (
		<div className="sort-main">
			<section className="sorting--section">
				<div className="list">
					<ul>
						<li className="active">All</li>
						<li>Women</li>
						<li>Men</li>
						<li>Kids</li>
						<li>Accessories</li>
						<li>Unisex</li>
					</ul>
				</div>
				<div className="filter">
					<ul>
						<li className="sort-top">Filter:</li>
						<li>Categories</li>
						<li>Price range</li>
						<li>Brand</li>
						<li>Rating</li>
					</ul>
					<select name="pets" id="filter-select" className="mobile">
						<option value="">--Please choose an option--</option>
						<option value="dog">Dog</option>
						<option value="cat">Cat</option>
						<option value="hamster">Hamster</option>
						<option value="parrot">Parrot</option>
						<option value="spider">Spider</option>
						<option value="goldfish">Goldfish</option>
					</select>
				</div>
				<div className="sort">
					<ul>
						<li className="sort-top">Sort By:</li>
						<li>Popularity</li>
						<li>Price</li>
						<li>Price(Low to High)</li>
						<li>Oldest</li>
						<li>Newest</li>
					</ul>
					<select name="pets" id="sort-select" className="mobile">
						<option value="">--Please choose an option--</option>
						<option value="dog">Dog</option>
						<option value="cat">Cat</option>
						<option value="hamster">Hamster</option>
						<option value="parrot">Parrot</option>
						<option value="spider">Spider</option>
						<option value="goldfish">Goldfish</option>
					</select>
				</div>
			</section>
			<section className="card-shopping">
				<h1>Exclusive deal just for you</h1>
				<ul>
					{arrItems.map((item) => (
						<CardSection
							img={item.img}
							name={item.name}
							price={`$ ${item.price}`}
							number={item.number}
							key={item.name}
						/>
					))}
				</ul>
			</section>
			<section className="number-sort-section">
				<div>
					<div style={{ color: "#ff6f61" }} className="caret-left">
						<FontAwesomeIcon icon={faArrowLeft} size={32} />
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
						<FontAwesomeIcon icon={faArrowRight} size={32} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default SortSection;
