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
export const ALBUM_LIST = 'ALBUM_LIST';
export const ALBUM_SAVE = 'ALBUM_SAVE';

export const addAlbum = (token, name, cap) => {
  const { dispatch } = store;
  const values = {
    name,
    capacity: cap,
    user_id: token
  }
  return (dispatch)=>{
    return axios.post(`${ROOT_URL}/api/users/albums`, { values }).then((res)=>{
      if (res.data.success) return true;
    });
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
      dispatch(saveAlbumList(res.data));

    }).catch(err=>console.log(err));
  }

}

export const saveAlbumList = (list) => {
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
        dispatch(saveAlbumList(res.data.albums))
      } else alert('Unknown Error. Try Again.');
    }).catch((err)=>{console.log(err)});

  }
}


export const activeAlbum = (idx) => {
  return {
    type: ACTIVE_ALBUM,
    idx
  }
}
