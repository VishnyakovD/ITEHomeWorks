/*
  Основной редьюсер в котором собираем все остальные
*/

import { combineReducers } from 'redux';
import users from './users';
import stuff from './stuff';
import posts from './posts';
import post from './posts/post';
//import user from './user';


const reducer = combineReducers({
  users,
  stuff,
  posts,
  post,
  //user
});

export default reducer;
