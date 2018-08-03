import {combineReducers} from 'redux';
import comments from './comments';
import users from './users';

export const reducer = combineReducers({
    comments,
    users
});
