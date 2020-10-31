import { combineReducers } from 'redux';
import albumReducer from './album.reducer';
import favouritesReducer from './favourites.reducer';

const rootReducer = combineReducers({
        pictures: albumReducer,
        favAlbum: favouritesReducer
});

export default rootReducer;