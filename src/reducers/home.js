import { MORE } from "../actions/home";

const initialState = {
    more: false
};

const home = (state = initialState, action = {}) => {
    switch(action.type) {
        
            case MORE:
                return {
                ...state,
                more: !state.more
            };
            
        default:
            return state;
    }
};

export default home;