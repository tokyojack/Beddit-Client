import {
    LOAD_POST,
    RESET_POST
} from "../actionTypes"

const DEFAULT_SATE = {
    isLoading: true,
    value: null
}

const post = (state = DEFAULT_SATE, action) => {
    switch (action.type) {
        case LOAD_POST:
            return {
                isLoading: false,
                    value: action.value
            };
        case RESET_POST:
            return DEFAULT_SATE;
        default:
            return state;
    }

}

export default post;