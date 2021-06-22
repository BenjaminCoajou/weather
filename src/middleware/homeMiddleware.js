import axios from 'axios';
import { SUBMIT_CITY, searchCitySuccess, searchCityError } from '../actions/serachBar';

const homeMiddleware = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_CITY:
            axios.get("https://goweather.herokuapp.com/weather/"+store.getState().searchBar.city)
            .then((response) => {
                store.dispatch(searchCitySuccess(response.data))
            })
            .catch(() => {
                store.dispatch(searchCityError())
            });
            break;
        default:
            return next(action);
    }
};

export default homeMiddleware;