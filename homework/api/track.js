import resource from './resource';

export default {
  search(query) {
    const params = {
      q: query,
      limit: 10,
      market: 'ID',
      type: 'track',
    };

    return resource.get('/search', { params });
  },
};