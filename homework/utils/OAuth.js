import { getStorage } from './storage';

export const isAuth = !!getStorage('TOKEN');

export const interceptSpotifyAuthRedirect = () => {
  if (isAuth)
    return {
      token: getStorage('TOKEN'),
      type: getStorage('TOKEN_TYPE'),
    };

  const STATE_KEY = getStorage('STATE_KEY');
  if (!STATE_KEY) throw new Error('No state key found');

  if (!window.location.hash) {
    const errorMessage = window.location.href.split('error=')[1];
    if (errorMessage) {
      throw new Error(errorMessage);
    } else {
      throw new Error('Not authenticated');
    }
  }

  const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      if (item) {
        const parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
  window.location.hash = '';
  window.location.reload();

  if (hash.state !== STATE_KEY) throw new Error('State mismatch');

  return {
    token: hash.access_token,
    type: hash.token_type,
  };
};