import {TODO_LOAD, TODO_ADD, TODO_DELETE} from '../constants/ActionTypes.js';

function todos(state = [], action) {
    switch(action.type) {
        case TODO_LOAD:
            return action.todos;
        case TODO_ADD:
            return [...state, action.todo];
        case TODO_DELETE:
            return [...state].filter((todo) => {
                return todo._id !== action.id;
            });
        default:
            return state;
    }
}

export default todos;
