export default function activeFeed(state = {}, action) {
  switch (action.type) {
    case 'ACTIVE_FEED_UPDATE':
      return action.feed || {};
    default :
      return state;
  }
}
