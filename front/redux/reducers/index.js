import userReducer from './userReducer';
import cartReducer from './cartReducer';
import productReducer from './ProductReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  productReducer,
});

export default rootReducer;
