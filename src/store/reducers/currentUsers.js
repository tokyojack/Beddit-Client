import {
    SET_CURRENT_USER
} from "../actionTypes";

const DEFAULT_SATE = {
    isAuthenticated: false,
    user: {} 
}

export default (state = DEFAULT_SATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: Object.keys(action.user).length > 0,
                user: action.user
            };
            default:
                return state;
    }
}