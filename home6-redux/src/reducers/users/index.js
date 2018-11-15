import { MY_FIRST_CONST_IN_PROJECT } from '../../constants';

const usersInitialState = {
  loading: false,
  loaded: false,
  data: [],
  errors: []
};

const users = ( state = usersInitialState, action) => {
  switch( action.type ){
    case 'REQUEST':
      return {
        ...state,
        loading: true
      }

    case 'RESPONSE':
      return {
        ...state,
        data: action.data,
        loading: false,
        loaded: true
      }

    case 'ERROR':
      return {
        ...state,
        errors: action.error
      }

    case MY_FIRST_CONST_IN_PROJECT:
      return {
        errors: [{text: 'Something went wrong...'}]
      }

    default:
      return state;
  }
}


export default users;
