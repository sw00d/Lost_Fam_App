import { ALBUM_SAVE, ALBUM_LIST, ACTIVE_ALBUM, DELETE_ALBUM, PICS_TAKEN, SAVE_PHOTO } from '../actions/album_actions';
import { CONNECTION_UPDATE } from '../actions/general_actions';
import { AsyncStorage } from 'react-native'

export default (state = {
  albums: [],
  activeAlbum: {}
}, action) => {
  switch(action.type) {
    case ALBUM_SAVE:
      const { bool } = action;
      return {
        ...state,
        albumSaved: bool
      }
    case ALBUM_LIST:
      state.albums = action.list;
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
      // albums[idx].pics.forEach(async key => {
      //     try {
      //       await AsyncStorage.removeItem(key.key);
      //     } catch (error) {
      //       console.log('Delete Album error: ', error)
      //     }
      //   })
      albums.splice(idx, 1);
      if (state.activeAlbum.idx === idx) state.activeAlbum = {};
      return {
        ...state,
        albums
      }
    default:
      return state;
  }
}
