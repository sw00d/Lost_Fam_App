export const ADD_ALBUM = 'ADD_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const ACTIVE_ALBUM = 'ACTIVE_ALBUM';
export const SAVE_PHOTO = 'SAVE_PHOTO';

export const addAlbum = (name) => {
  const newAlbum = {
    picsTaken: 0,
    capacity: 24,
    name
  }
  return {
    type: ADD_ALBUM,
    newAlbum
  }
}

export const activeAlbum = (idx) => {
  return {
    type: ACTIVE_ALBUM,
    idx
  }
}

export const savePhoto = () => {
  return {
    type: SAVE_PHOTO

  }
}
export const deleteAlbum = (name) => {
  return {
    type: DELETE_ALBUM,
    payload: name
  }
}
