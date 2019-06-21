import { LOAD_POST, RESET_POST } from '../actionTypes';
import { addError } from "./errors"
import { apiCall } from "../../services/api"

export const loadPost = value => ({
    type: LOAD_POST,
    value
});

export const fetchPost = (post_id) => {
    return dispatch => {
        dispatch({
            type: RESET_POST
        });
        return apiCall("get", `/api/post/${post_id}`)
            .then(res => dispatch(loadPost(res)))
            .catch(err => dispatch(addError(err.message)))
    }
}