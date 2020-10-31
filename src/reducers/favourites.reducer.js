import { favouritesConstants } from "../actions/constants";

const initialState = {
    favAlbum: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case favouritesConstants.ADD_TO_FAVOURITES_SUCCESS:
            state = {
                ...state,
                favAlbum: [...state.favAlbum, action.payload.favObj]
            }
            break;
        case favouritesConstants.DELETE_FROM_FAVOURITES_SUCCESS:
            state = {
                favAlbum: state.favAlbum.filter((item) => item.id !== action.payload)
            }
            console.log(action.payload)
            break;
    }
    return state;
}