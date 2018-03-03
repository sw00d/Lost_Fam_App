export const ADD_ALBUM = 'ADD_ALBUM';
export const ACTIVE_ALBUM = 'ACTIVE_ALBUM';

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
