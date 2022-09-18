import userReducer from './userReducer'
import cartReducer from './cartReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
})

export default rootReducer
