import {REQ_POSTS,SUC_POSTS,ERR_POSTS} from "../../constants"


const postsInitialState = {
  loading: false,
  loaded: false,
  data: [],
  errors: []
};

const posts = ( state = postsInitialState, action) => {
  switch( action.type ){
    case REQ_POSTS:
      return {
        ...state,
        loading: true
      }

    case SUC_POSTS:
      return {
        ...state,
        data: action.data,
        loading: false,
        loaded: true
      }

    case ERR_POSTS:
      return {
        ...state,
        errors: action.error
      }

    default:
      return state;
  }
}


export default posts;
