import axios from 'axios';


/* Reducer */
export function getGeometryReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_LOCATION':
            return [ action.payload, ...state ];
    }
    return state;
}

/* Action */
export function getGeometryAction(respons) {
    return {
        type: 'ADD_LOCATION',
        payload: respons[0]
    };
}

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