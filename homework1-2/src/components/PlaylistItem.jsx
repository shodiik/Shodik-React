function Track({ image, songName, albumName, artists }) {
    return (
      <div className="playlist-item">
        <img className="playlist-image" src={image} alt={songName} />
        <div className="playlist-content">
            <h2>{songName}</h2>
            <h3>
                {artists.map((artist) => artist.name).join(', ')}
            </h3>
            <h3>{albumName}</h3>
        </div>
        <div className="playlist-actions">
            <button type="button" className="playlist-action">
                Pilih
            </button>
        </div>
      </div>
    );
  }
  
  export default Track;