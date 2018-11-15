/*
  Основной редьюсер в котором собираем все остальные
*/

import { combineReducers } from 'redux';
import users from './users';
import stuff from './stuff';

const reducer = combineReducers({
  users,
  stuff
});

export default reducer;
