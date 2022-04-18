import '../../Assets/App.css';
import "../../Assets/CreatePlaylist.css";
import Music from '../../Components/Music';
import SearchBar from '../../Components/Search';
import React, { useState } from 'react';
import PlaylistForm from '../../Components/Playlist';
import { useSelector } from 'react-redux';
import {
  Redirect
} from "react-router-dom";

function CreatePlaylist() {
  
  const [selectedMusic, setSelectedMusic] = useState([]);
  const { token } = useSelector((state) => state.userToken);
  const { items } = useSelector((state) => state.musicsData);

	const selectMusic = (data) => {
		const tempArrMusicId = [...selectedMusic, data.uri];
		setSelectedMusic(tempArrMusicId);
	};

	const deselectMusic = (data) => {
		const index = selectedMusic.indexOf(data.uri);

		const tempArrMusicId = selectedMusic.concat([]);
		tempArrMusicId.splice(index, 1);
		setSelectedMusic(tempArrMusicId);
	};

  return (
    <div className="App">
        {
            token === "" ? <Redirect to="/"/> : <p>Berhasil Login</p> 
        }
    <h1>Buat Playlist Kamu</h1>
    <PlaylistForm selectedMusic={selectedMusic} />

    <h3>Cari dan Pilih Track Musik</h3>

    <SearchBar />

    <div className="musics-wrapper">

        {
          items
            .filter((music) => {
              return selectedMusic.includes(music.uri);
            })
            .map((music) => {
              return <Music key={music.uri} data={music} select={selectMusic} deselect={deselectMusic} isSelected={true}/>;
            })
        }
        {
          items
            .filter((music) => {
              return !selectedMusic.includes(music.uri);
            })
            .map((music) => {
              return <Music key={music.uri} data={music} select={selectMusic} deselect={deselectMusic} isSelected={false}/>;
            })
        }

      </div>

    </div>
   );
};

export default CreatePlaylist;