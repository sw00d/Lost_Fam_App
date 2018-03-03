export const ADD_ALBUM = 'ADD_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const ACTIVE_ALBUM = 'ACTIVE_ALBUM';
export const SAVE_PHOTO = 'SAVE_PHOTO';
export const PICS_TAKEN = 'PICS_TAKEN';

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

export const picsTaken = (album) => {
  album.picsTaken++;
  return {
    type: PICS_TAKEN,
    album
  }
}
export const cache = (data) => {
 console.log(3)
  return {
    type: SAVE_PHOTO,
    payload: data
  }

}

export function savePhoto(data) {
 // console.log(1)
 //  return async (dispatch) => {
 //    console.log(2)
 //    try {
 //      await AsyncStorage.setItem('@foto:key',data.uri);
 //      dispatch(cache(data))
 //    } catch (error) {
 //      Alert.alert('Error. Try Again');
 //    }
 //
 //
 //    return data;
 //  }
}


export const deleteAlbum = (name) => {
  return {
    type: DELETE_ALBUM,
    payload: name
  }
}
