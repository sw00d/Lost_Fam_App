import { ADD_ALBUM, ACTIVE_ALBUM, DELETE_ALBUM } from '../actions';

export default (state = {
  albums: []
}, action) => {
  switch(action.type) {
    case ADD_ALBUM:
      state.albums.push(action.newAlbum)
      return { ...state }
    case ACTIVE_ALBUM:
      const activeAlbum = state.albums[action.idx];
      return {
        ...state,
        activeAlbum
      }
    // case DELETE_ALBUM:
    //   state.albums.shift()
    //   return { ...state }
    default:
      return state;
  }
}
