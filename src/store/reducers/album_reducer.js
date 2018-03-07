import { ADD_ALBUM, ACTIVE_ALBUM, DELETE_ALBUM, PICS_TAKEN, SAVE_PHOTO } from '../actions';
import { AsyncStorage } from 'react-native'

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
      const { albums } = state;
      const { idx } = action;
      albums[idx].pics.forEach(async key => {
          try {
            await AsyncStorage.removeItem(key.key);
          } catch (error) {
            console.log('Delete Album error: ', error)
          }
        })
      albums.splice(idx, 1);
      if (state.activeAlbum.idx === idx) state.activeAlbum = {};
      return {
        ...state,
        albums
      }
    case SAVE_PHOTO:
      const alb = state.activeAlbum;
      alb.pics.push(action.data);
      return {
        ...state,
        activeAlbum: alb
      }
    default:
      return state;
  }
}
