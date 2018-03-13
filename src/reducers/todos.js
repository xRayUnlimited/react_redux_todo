const todos = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_TODO':
      //{type: 'ADD_TODO', todo: 'Buy Milk' }
      return [action.todo, ...state]
    default:
      return state;
  }
}

export default todos;