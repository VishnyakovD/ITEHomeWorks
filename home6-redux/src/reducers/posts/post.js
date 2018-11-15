import {REQ_POST,SUC_POST,ERR_POST} from "../../constants"


const postInitialState = {
  loading: false,
  loaded: false,
  data: {},
  errors: []
};

const post = ( state = postInitialState, action) => {
  switch( action.type ){
    case REQ_POST:
      return {
        ...state,
        loading: true
      }

    case SUC_POST:
      return {
        ...state,
        data: action.data,
        loading: false,
        loaded: true
      }

    case ERR_POST:
      return {
        ...state,
        errors: action.error
      }

    default:
      return state;
  }
}


export default post;
