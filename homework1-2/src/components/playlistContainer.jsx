import PlaylistItem from './PlaylistItem';

function playlistContainer({ tracks }) {
 
  function renderPlaylistItems() {
    return tracks.map((item) => {
      const { id, album, name: songName, artists } = item;
      return (
        <PlaylistItem
          key={id}
          image={album.images[0]?.url}
          songName={songName}
          albumName={album.name}
          artists={artists}
        />
      );
    });
  }

  return <div className="playlist-container">{renderPlaylistItems()}</div>;
}

export default playlistContainer;