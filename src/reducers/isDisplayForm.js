import * as types from './../constants/ActionTypes';

var initState = false;
var myReducer = (state = initState, action) => {
    switch(action.type){
        case types.TOGGLE_FROM:
            return !state;
        case types.CLOSE_FROM:
            return false;      
        case types.OPEN_FROM:
            return true;      
        default: return state;
    }
}

export default myReducer;