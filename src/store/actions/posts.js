import {
    LOAD_POSTS,
    RESET_POSTS
} from '../actionTypes';
import {
    addError
} from "./errors"
import {
    apiCall
} from "../../services/api"

export const loadPosts = values => ({
    type: LOAD_POSTS,
    values
});

export const fetchPosts = (categoryName) => {
    return dispatch => {
        dispatch({
            type: RESET_POSTS
        });
        return apiCall("get", `/api/category/${categoryName}`)
            .then(res => dispatch(loadPosts(res)))
            .catch(err => dispatch(addError(err.message)))
    }
}

export const postNewPost = (title, content, category_name) => (dispatch, getState) => {
    let {
        currentUser
    } = getState();
    const user_id = currentUser.user.id;
    return apiCall("post", `/api/post/`, {
            title,
            content,
            user_id,
            category_name
        })
        .catch(err => dispatch(addError(err.message)))
};

export const fetchPostsChangePost = (id, user_id, amount) => {
    return dispatch => {
        return apiCall("post", `/api/post/${id}`, {
                amount,
                user_id
            })
            .catch(err => dispatch(addError(err.message)))
    }
}