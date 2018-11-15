import { STUFF_ACTION } from '../../constants';

const usersInitialState = {
  superString: 'wow!'
};

const stuff = ( state = usersInitialState, action) => {
  switch( action.type ){
    case STUFF_ACTION:
      return {
        ...state,
        loading: true
      }

    default:
      return state;
  }
}

export default stuff;
