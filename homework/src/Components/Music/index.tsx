import React from "react";
// import PropTypes from "prop-types";
import "../../Assets/Music.css";
import { Item } from "../../Interface/ISpotifyResponse";

function Music({data, select, deselect, isSelected} : {
	data: Item,
	select: (item: Item) => void,
	deselect: (item: Item) => void,
	isSelected: boolean

}) {

	const handleSelect = () => {
		select(data);
	};

	const handleDeselect = () => {
		deselect(data);
	};

	return (
		<div className='Music'>
			<div className="music-wrapper">
				<div className='music-img'>
					<img src={data.album.images[0].url} alt={data.name}/>
				</div>
				<div className='music-info'>
					<div className="title-wrapper">
						<p className='music-title'>{data.name}</p>
					</div>
					<p className='music-artist'>{data.artists[0].name}</p>
				</div>
			</div>
			<div>
				{isSelected
					? <button onClick={handleDeselect} className='btn selected'>Deselect</button>
					: <button onClick={handleSelect} className='btn select'>Select</button>
				}
			</div>
		</div>
	);
}

export default Music;