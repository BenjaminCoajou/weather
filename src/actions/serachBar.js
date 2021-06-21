export const SEARCH_CITY = 'SEARCH_CITY';
export const SEARCH_CITY_SUCCESS = 'SEARCH_CITY_SUCCESS';
export const SUBMIT_CITY = "SUBMIT_CITY";

export const searchCity = (payload) => ({
    type: SEARCH_CITY,
    payload
});

export const searchCitySuccess = (payload) => ({
    type: SEARCH_CITY_SUCCESS,
    payload
});

export const submitCity = () => ({
    type: SUBMIT_CITY,
    
})