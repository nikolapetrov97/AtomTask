import axios from 'axios';
import { albumConstants } from "../actions/constants";

export const getAlbumPictures = (value) => {
    return async dispatch => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
        const filtered = res.data.filter(picture => picture.albumId == value)
        if (res.status === 200) {
            dispatch({
                type: albumConstants.GET_PICTURES_FROM_ALBUM_SUCCESS,
                payload: { filtered }
            })
        }
        else {
            dispatch({
                type: albumConstants.GET_PICTURES_FROM_ALBUM_FAILURE,
                payload: { error: res.data.error }
            })
        }
        // console.log(filtered)
    }
}