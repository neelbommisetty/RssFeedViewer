function feeds(state = [], action) {
  switch (action.type) {
    case 'FEED_FETCH_SUCCESS': {
      const newFeed = [{ ...action.data, url: action.url, id: action.id }, ...state];
      localStorage.setItem('feed', JSON.stringify(newFeed));
      return newFeed;
    }
    case 'REMOVE_FEED': {
      const feed1 = [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1),
      ];
      localStorage.setItem('feed', JSON.stringify(feed1));
      return feed1;
    }
    default:
      return state;
  }
}

export default feeds;
