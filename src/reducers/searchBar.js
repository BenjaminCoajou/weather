import { SEARCH_CITY, SEARCH_CITY_ERROR, SEARCH_CITY_SUCCESS } from "../actions/serachBar";
import { BACK } from "../actions/home";

const initialState = {
    city: "",
    cityInfos: false,
    error: false,
};

const searchBar = (state = initialState, action = {}) => {
    switch(action.type) {
        case SEARCH_CITY:
            return {
                ...state,
                city: action.payload,
            };
            case SEARCH_CITY_SUCCESS:
                return {
                    ...state,
                    cityInfos: action.payload,
                    error: false,
                };
            case BACK:
                return {
                ...state,
                cityInfos: false
            };
            case SEARCH_CITY_ERROR:
                return {
                    ...state,
                    error: !state.error,
                };
        default:
            return state;
    }
};

export default searchBar;