import { albumConstants } from "../actions/constants";

const initialState = {
    albumPictures: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case albumConstants.GET_PICTURES_FROM_ALBUM_FAILURE:
            state = {
                ...state,
                error: action.payload.error
            }
            break;

        case albumConstants.GET_PICTURES_FROM_ALBUM_SUCCESS:
            state = {
                ...state,
                albumPictures: action.payload.filtered
            }
    }
    return state;
}