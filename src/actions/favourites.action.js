import { favouritesConstants } from "../actions/constants";

export const addFav = (favObj) => {
    return async dispatch => {

            dispatch({
                type: favouritesConstants.ADD_TO_FAVOURITES_SUCCESS,
                payload: { favObj }
            })
        }
}

export const deleteFav = (id) => {
    return async dispatch => {
        dispatch({
            type: favouritesConstants.DELETE_FROM_FAVOURITES_SUCCESS,
            payload: id
        })
    }
}