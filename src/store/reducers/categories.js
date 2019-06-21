import {LOAD_CATEGORIES} from "../actionTypes"

const DEFAULT_SATE = {
    isLoading: true,
    values: []
}

const message = (state=DEFAULT_SATE, action) => {
    switch(action.type){
        case LOAD_CATEGORIES:
            return {
                isLoading: false,
                values: [...action.values]
            };
        default:
            return state;
    }
}

export default message;