import { combineReducers } from 'redux';
import searchBar from './searchBar';
import home from './home';

export default combineReducers({
    searchBar,
    home,
});