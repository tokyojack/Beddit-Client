import { combineReducers } from "redux";
import currentUser from './currentUsers';
import categories from './categories';
import errors from './errors';
import posts from './posts';
import post from './post';

const rootReducer = combineReducers({
    currentUser,
    categories,
    errors,
    posts,
    post
});

export default rootReducer;