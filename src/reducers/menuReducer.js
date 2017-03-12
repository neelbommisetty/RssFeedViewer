export default function isMenuActive(state = false, action) {
  switch (action.type) {
    case 'MENU_ACTIVE':
      return action.value || false;
    default :
      return state;
  }
}
