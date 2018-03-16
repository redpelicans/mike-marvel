import { MARVEL_LOADED, CHANGE_PAGE, CHARACTERS_DETAIL } from '../actions';

export default (state = {} , action = {}) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {...state, pageId: action.payload.pageId}
    case MARVEL_LOADED:
      return {...state, characters: action.payload.characters, isPending: action.payload.isPending}
    case CHARACTERS_DETAIL:
      return {...state, characterBio: action.payload.characterBio}
    default:
      return state
  }
}