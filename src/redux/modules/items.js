const initialState = {
  items: [{
    text: 'Rice',
    done: true,
  }, {
    text: 'Sugar',
    done: false,
  }, {
    text: 'Eggs',
    done: true,
  }, {
    text: 'Bacon Ends & Pieces',
    done: true,
  }, {
    text: 'Boxed Macaroni & Cheese',
    done: false,
  }, {
    text: 'Chicken',
    done: true,
  }, {
    text: 'Garlic',
    done: true,
  }, {
    text: 'Onions',
    done: true,
  }, {
    text: 'Vegetables',
    done: false,
  }],
};

export function items(state = initialState, action) {
  switch (action.type) {
  case 'ADD_ITEM':
    return {
      ...state,
      items: [
        ...state.items, {
          text: action.fields.name.value,
          done: false
        },
      ],
    };

  case 'DELETE_ITEM':
    return {
      ...state,
      items: [
        ...state.items.slice(0, action.index),
        ...state.items.slice(+action.index + 1),
      ],
    };

  case 'DONE_ITEM':
      return Object.assign({}, state, {
        items: state.items.map((item, index) => {
          if(index == action.index) {
            return Object.assign({}, item, {
              done: action.done
            })
          }
          return item;
        })
      });

  default:
    return state;
  }
}

export function addItem(fields) {
  return {
    type: 'ADD_ITEM',
    fields,
  };
}

export function delItem(index) {
  return {
    type: 'DELETE_ITEM',
    index,
  };
}

export function doneItem(index, done) {
  return {
    type: 'DONE_ITEM',
    index,
    done
  }
}

export function exampleAction(){

  return {
    type: 'GET_EXAMPLE_ACTION',
    payload: ['daniel']
  };
}