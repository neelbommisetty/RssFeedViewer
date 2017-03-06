import { push } from 'react-router-redux';
import { toastr } from 'react-redux-toastr';

export function addUrl(url) {
  return (dispatch) => {
    fetchRss(url, dispatch);
  };
}
export function refreshActiveFeed(feed) {
  return {
    type: 'ACTIVE_FEED_UPDATE',
    feed,
  };
}
export function removeLink(i) {
  return {
    type: 'REMOVE_FEED',
    i,
  }
}

function fetchRss(url, dispatch) {
  const FEED_API_URL = ' https://api.rss2json.com/v1/api.json?rss_url=';
  const newUrl = FEED_API_URL + encodeURIComponent(url);
  fetch(newUrl)
    .then((res) => res.json())
    .then((data) => {
      const id = Math.random().toString(36).substring(7);
      if (data.status === 'error') {
         dispatch({
          type: 'FETCH_ERROR',
         });
         toastr.error('Invalid Rss Url', 'Please check the url and try again');
         return;
      }
      dispatch({
        type: 'FEED_FETCH_SUCCESS',
        data,
        url,
        id
      });
      dispatch(push(`/${id}`));
    })
    .catch(() => {
      dispatch({
        type: 'FETCH_ERROR',
      });
      toastr.error('Fetch Failed', 'Error Fetching the rss feed try again');
    });
}
