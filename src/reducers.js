import * as actionTypes from './actionTypes';
import { combineReducers } from 'redux';

const DEFAULT_AUTH_STATE = {
    isPending: false,
    username: null
};

function auth(state, action) {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return { ...state, username: null, isPending: true };
        case actionTypes.LOGIN_END:
            return action.error
                ? { ...state, username: null, isPending: false }
                : { ...state, username: action.payload.username, isPending: false };
        case actionTypes.LOGOUT:
            return DEFAULT_AUTH_STATE;
        default:
            return state || DEFAULT_AUTH_STATE;
    }
}
export default combineReducers({ auth });
