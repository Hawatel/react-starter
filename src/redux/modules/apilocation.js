import axios from 'axios';

/**
 * Reducer for return current state of Geometry
 *
 * @param state
 * @param action
 * @returns {*}
 */
export function getGeometryReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_LOCATION':
            return [ action.payload, ...state ];
    }
    return state;
}

/**
 * Action used by getGeometryActionAsync to parse data received from API
 *
 * @param respons - pyload object
 * @returns {{type: string, payload: *}} - data for reducer
 */
export function getGeometryAction(respons) {
    return {
        type: 'ADD_LOCATION',
        payload: respons[0]
    };
}


/**
 * Async. Redux action to get geometry data from remote API.
 *
 * @param city - name of city
 * @returns {Function} - payload return by getGeometryAction function
 *
 * @example getGeometryActionAsync('Warsaw');
 */
export function getGeometryActionAsync(city) {

    const API   = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city;
    var respons = '';

    axios.get(API)
        .then(function (response) {
            respons = response.data.results;
        })
        .catch(function (response) {
            respons = 'catch error' + response;
        });

    return dispatch => {
        setTimeout(() => {
            dispatch(getGeometryAction(respons));
        }, 1000);
    };
}