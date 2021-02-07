/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import {combineReducers} from 'redux';
import NavigationReducer from './NavigationReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  nav: NavigationReducer,
  user: UserReducer
});
