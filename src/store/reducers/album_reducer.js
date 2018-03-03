import { ADD_ALBUM, ACTIVE_ALBUM, DELETE_ALBUM, PICS_TAKEN } from '../actions';

export default (state = {
  albums: [],
  activeAlbum: {}
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
    case DELETE_ALBUM:
      const albs = state.albums;
      const match = action.payload;
      for (let i = 0; i < albs.length; i++){
        if (albs[i].name === match){
          state.albums.splice(i, 1);
        }
      }
      return { ...state, albs }

    case PICS_TAKEN:
    const alb = action.album
      return { ...state, alb }
    default:
      return state;
  }
}
