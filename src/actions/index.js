import * as types from './../constants/ActionTypes';

export const listAll =  () => {
    return {
        type : types.LIST_ALL
    }
}

export const addTask =  (task) => {
    return {
        type : types.ADD_TASK,
        task
    }
}

export const toogleForm = () => {
    return {
        type : types.TOGGLE_FROM
    }
}

export const openForm =  () => {
    return {
        type : types.OPEN_FROM
    }
}

export const closeForm =  () => {
    return {
        type : types.CLOSE_FROM
    }
}

export const updateStatusTask = (id) => {
    return {
        type : types.UPDATE_STATUS_TASK,
        id
    }
}

export const deleteTask = (id) => {
    return {
        type : types.DELETE_TASK,
        id
    }
}

