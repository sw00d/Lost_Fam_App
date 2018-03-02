export const ADD_ALBUM = 'ADD_ALBUM';

export const addAlbum = (name) => {
  const newAlbum = {
    picsTaken: 0,
    capacity: 24,
    name
  }
  return {
    ADD_ALBUM,
    newAlbum
  }
}
