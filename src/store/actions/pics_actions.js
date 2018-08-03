import { store } from '../index.js'
import axios from 'axios';
const { manifest } = Expo.Constants;
const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:8080`)
  : `api.example.com`;
const ROOT_URL = `http://${api}`;

export const SAVE_PHOTO = 'SAVE_PHOTO';

export const savePhoto = (key, exif) => {
  const data = {
    key,
    exif
  }
  return {
    type: SAVE_PHOTO,
    data
  }
}

export const savePicToAPI = (values) => {
  const { dispatch } = store;
  return () => {
    axios.post(`${ROOT_URL}/api/pics`, { values }).then(res => {
      // dispatch(saveAlbumList(res.data));
      console.log(res.data);

    }).catch(err=>console.log(err));
  }

}
