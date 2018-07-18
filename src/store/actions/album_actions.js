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
  console.log('fires');
  const values = {
    name,
    capacity: cap,
    user_id: token
  }
  return () => {
    axios.post(`${ROOT_URL}/api/users/albums`, { values }).then(res => {
      console.log(res.AlbumSuccess);
    }).catch(err=>console.log(err));
  }
}

export const saveAlbum = (newAlbum) => {
    return {
      type: ADD_ALBUM,
      newAlbum
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

export const deleteAlbum = (idx) => {
  return {
    type: DELETE_ALBUM,
    idx
  }
}
