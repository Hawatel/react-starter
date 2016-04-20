import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './modules/items';
import { getGeometryReducer } from './modules/apilocation';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  items,
  getGeometryReducer
});

export default rootReducer;
