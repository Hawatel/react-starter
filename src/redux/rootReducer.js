import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './modules/items';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  items,
});

export default rootReducer;
