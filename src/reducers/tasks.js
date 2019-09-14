import * as types from './../constants/ActionTypes';

var generateID = () => {
    return Math.floor((1+Math.random()) * 0x100000).toString(16).toString(1);
}
var findIndex = (id, tasks) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
}

var data = JSON.parse(localStorage.getItem('tasks'));
var initState = data ? data : [];
var myReducer = (state = initState, action) => {
    let index = '';
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newTask = {
                id : generateID(),
                name : action.task.name,
                status : action.task.status
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case types.UPDATE_STATUS_TASK:
            index = findIndex(action.id, state);
            state[index] = {
                ...state[index],
                status : ! state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case types.DELETE_TASK:
            index = findIndex(action.id, state);
            state.splice(index,1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        default: return state;
    }
}

export default myReducer;