import { store } from '../index.js'
import axios from 'axios';
const { manifest } = Expo.Constants;
const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:8080`)
  : `api.example.com`;
const ROOT_URL = `http://${api}`;

export const ADD_ALBUM = 'ADD_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const ACTIVE_ALBUM = 'ACTIVE_ALBUM';
export const SAVE_PHOTO = 'SAVE_PHOTO';
export const ALBUM_LIST = 'ALBUM_LIST';
export const PICS_TAKEN = 'PICS_TAKEN';

// export const addAlbum = (name, idx) => {
//   const newAlbum = {
//     pics: [],
//     capacity: 4,
//     idx,
//     name
//   }
//   return {
//     type: ADD_ALBUM,
//     newAlbum
//   }
// }


// const { dispatch, getState } = store;
// const { values } = getState().form.register;
// values.email = values.email.toLowerCase();
// if (canNavToNext(values, validate)) {

// if (!res.data.success) {
//   dispatch(userHasErrored(true, "Failed to create user."));
//   alert('An unknown error occurred. Please try again.')
// }
// if (res.data.success) {
//   dispatch(userHasErrored(false, ""))
//   dispatch(authenticateUser(validate, values));
// }

export const addAlbum = (token, name, cap) => {
  const values = {
    name,
    capacity: cap,
    user_id: token
  }
  const self = this;
  return () => {
    axios.post(`${ROOT_URL}/api/users/albums`, { values }).then(res => {
      alert(res.data)
      console.log('boombammbamm');
      self.props.navigation.navigate('library');

    }).catch(err=>console.log(err));
  }
}

export const getAlbums = (token) => {
  const { dispatch } = store;

  const params = {
    user_id: token,
    albIdx: 0
  }

  return () => {
    axios.get(`${ROOT_URL}/api/users/albums`, { params }).then(res => {
      console.log('fired getalbums');
      dispatch(saveAlbumList(res.data));

    }).catch(err=>console.log(err));
  }

}

export const saveAlbumList = (list) => {
  console.log(list);
    return {
      type: ALBUM_LIST,
      list
    }
}

export const deleteAlbum = (token, albIdx) => {
  const { dispatch } = store;

  const params = {
    user_id: token,
    albIdx
  }

  return () => {

    axios.delete(`${ROOT_URL}/api/users/albums`, { params }).then((res)=>{
      if (res.data.success){
        // console.log(res.data.albums);
        dispatch(saveAlbumList(res.data.albums))
      }
    }).catch((err)=>{console.log(err)});

  }
}

export const savePhoto = (key, exif) => {
  const data = {
    key: key,
    exif: exif
  }
  return {
    type: SAVE_PHOTO,
    data
  }
}

export const activeAlbum = (idx) => {
  return {
    type: ACTIVE_ALBUM,
    idx
  }
}
