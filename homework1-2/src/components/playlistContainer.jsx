import PlaylistItem from './PlaylistItem';

import { SPOTIFY_PLAYLIST_MOCK_DATA } from '../constants';

function PlaylistContainer() {
  function renderPlaylist() {
    return SPOTIFY_PLAYLIST_MOCK_DATA.map((item) => {
      const {id, album, name:songName, artists} = item;
      return (
          <PlaylistItem
            key={id}
            image={album?.images[0]?.url}
            songName={songName}
            albumName={album?.name}
            artists={artists}
          />
      );
    });
  }

  return <div className="playlist-container">{renderPlaylist()}</div>;
}

export default PlaylistContainer;