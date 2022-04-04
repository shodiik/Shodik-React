import resource from '../api/resource';

export default {

  create(userID, payload) {
    const data = {
      name: payload.name,
      description: payload.description,
      collaborative: false,
      public: false,
    };
    return resource.post(`/users/${userID}/playlists`, data);
  },

  addTracks(playlistID, uris) {
    const data = { uris };
    return resource.post(`/playlists/${playlistID}/tracks`, data);
  },
};