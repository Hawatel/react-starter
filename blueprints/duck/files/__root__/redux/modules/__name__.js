// Action
export function <%= pascalEntityName %>(){
  var request  = 'example';

  return {
    type: 'ACTION_NAME',
    payload: request
  };
}

// Reducer
export const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
