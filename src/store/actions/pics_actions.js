import { store } from '../index.js';
import { NavigationActions } from 'react-navigation';
import {navigatorRef} from '../../components/camera/cameraView.js';

import axios from 'axios';
const { manifest } = Expo.Constants;
const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:8080`)
  : `api.example.com`;
// const ROOT_URL = `http://${api}`;
const ROOT_URL = `http://159.89.225.16:8080`;

export const SAVE_PHOTO = 'SAVE_PHOTO';
export const PIC_SAVED = 'PIC_SAVED';

export const picSaved = (bool) => {
    return {
      type: PIC_SAVED,
      bool
    }
}

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
      dispatch(picSaved(true));
      setTimeout(()=>dispatch(picSaved(false)), 1000)

    }).catch(err=>console.log(err));
  }

}
