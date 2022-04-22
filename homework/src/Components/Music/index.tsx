import React from "react";
import "../../Assets/Music.css";
import { Item } from "../../Interface/ISpotifyResponse";
import { Button } from "antd";

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

	const msFormatTime = (ms: number) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = Math.trunc((ms % 60000) / 1000);
		return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
	};

	return (
		<div aria-label="Music" className='Music'>
			<div className="music-wrapper">
				<div className='music-img'>
					<img src={data.album.images[0].url} alt={data.name}/>
					<p className="music-duration">{msFormatTime(data.duration_ms)}</p>
				</div>
				<div className='music-info'>
					<div className="title-wrapper">
						<p className='music-title'>{data.name}</p>
					</div>
					<p className='music-artist'>{data.artists[0].name}</p>
				</div>
			</div>
			<div className="button-wrapper">
				{isSelected
					? <Button onClick={handleDeselect} className="btn selected" shape="round"> SELECTED </Button>
					: <Button onClick={handleSelect} className="btn select" shape="round" type="primary"> SELECT </Button>
				}
			</div>
		</div>
	);
}

export default Music;