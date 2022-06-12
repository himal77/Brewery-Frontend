import React from 'react';
import './Beers.css';
import { beers } from '../data/menu';
import Slide from 'react-reveal/Reveal';

const Beers = ({ id }) => {
	return (
		<div className="beerContainer" id={id}>
			<h1 className="beerHeading">Most popular</h1>
			<div className="beerWrapper">
				{beers.map((beer, index) => (
					<Slide
						key={index}
						right={index >= 3 ? true : false}
						left={index < 3 ? true : false}
					>
						<div className="beerCard">
							<img src={beer.img} className="beerImg" alt={beer.alt} />
							<div className="beerInfo">
								<div className="beerTitle">{beer.title}</div>
								<div className="beerDesc">{beer.desc}</div>
								<div className="beerPrice">{beer.price}</div>
								<button className="beerBtn">Select</button>
							</div>
						</div>
					</Slide>
				))}
			</div>
		</div>
	);
};

export default Beers;