import { CHANGE_TODO, GET_TODOS, ADD_TODO, SET_FILTER} from '../constants';
  
  const initialState = {
    toDosList:  [
      { id: 0, text: "todo 1", isDone: false },
      { id: 1, text: "todo 2", isDone: false },
      { id: 2, text: "todo 3", isDone: true },
      { id: 3, text: "todo 4", isDone: false },
      { id: 4, text: "todo 5", isDone: false },
      { id: 5, text: "todo 6", isDone: false },
      { id: 6, text: "todo 7", isDone: false },
      { id: 7, text: "todo 8", isDone: true },
      { id: 8, text: "todo 9", isDone: false },
      { id: 9, text: "todo 10", isDone: false },
      { id: 10, text: "todo 11", isDone: true }
    ],
    filtredTodos: []
  };
  
  function reducer(state = initialState, action){
    switch( action.type ){   
      case SET_FILTER:
      return {
        ...state,
        filter: action.filter
      }; 

      case CHANGE_TODO:
     state.toDosList.forEach(item=>{if(item.id===Number(action.id)){ item.isDone=!item.isDone; return }});

        return {
          ...state,
          toDosList:state.toDosList,
          filtredTodos:state.filtredTodos
        };  

        case GET_TODOS:
          switch (action.filter) {
            case "done":
              state.filtredTodos = state.toDosList.filter(item => item.isDone === true);
              break;
      
            case "undone":
              state.filtredTodos = state.toDosList.filter(item => item.isDone === false);
              break;
      
            default:
              state.filtredTodos = state.toDosList;
              break;
          }
        return {
          ...state,
          filtredTodos: state.filtredTodos
        }; 

        case ADD_TODO:
        let todo={
          id:state.toDosList.length,
          text:action.text,
          isDone:false
        }
        return {
          ...state,
          toDosList: [...state.toDosList, todo ],
          filtredTodos:[...state.toDosList, todo ]
        }; 
  
      default:
        return state;
    }
  };
  
  
  
  export default reducer;
  