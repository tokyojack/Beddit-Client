import {
    LOAD_POSTS,
    RESET_POSTS
} from "../actionTypes"

const DEFAULT_SATE = {
    isLoading: true,
    values: []
}

const posts = (state = DEFAULT_SATE, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                isLoading: false,
                    values: [...action.values]
            };
        case RESET_POSTS:
            return DEFAULT_SATE;
        default:
            return state;
    }

}

export default posts;