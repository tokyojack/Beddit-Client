import { LOAD_CATEGORIES } from '../actionTypes';
import { addError } from "./errors"
import {apiCall } from "../../services/api"

export const loadCategories = values => ({
    type:LOAD_CATEGORIES,
    values
});

export const fetchCategories = () => {
    return dispatch => {
        return apiCall("get", "/api/category")
        .then(res => dispatch(loadCategories(res)))
        .catch(err => dispatch(addError(err.message)))
    }
}