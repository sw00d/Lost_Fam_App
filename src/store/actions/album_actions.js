export const ADD_ALBUM = 'ADD_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const ACTIVE_ALBUM = 'ACTIVE_ALBUM';
export const SAVE_PHOTO = 'SAVE_PHOTO';
export const PICS_TAKEN = 'PICS_TAKEN';

export const addAlbum = (name, idx) => {
  const newAlbum = {
    pics: [],
    capacity: 4,
    idx,
    name
  }
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
