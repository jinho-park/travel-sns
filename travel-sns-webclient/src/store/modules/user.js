import { createAction, handleActions} from 'redux-actions';
import { Map } from 'immutable';

const SET_LOGIN_FORM = "user/SET_LOGIN_FORM";
const SET_AUTH_FORM = "user/SET_AUTH_FORM";
const SET_INIT_FORM = "user/SET_INIT_FORM";
const SIGN_USER = "user/SIGN_USER";
const UPDATE_USER = "user/UPDATE_USER";
const SIGN_OUT_USER = "user/SIGN_OUT_USER";

export const setLoginForm = createAction(SET_LOGIN_FORM);
export const setAuthForm = createAction(SET_AUTH_FORM);
export const setInitForm = createAction(SET_INIT_FORM);
export const signUser = createAction(SIGN_USER);
export const updateUser = createAction(UPDATE_USER);
export const signoutUser = createAction(SIGN_OUT_USER);

const initialState = Map({
    mode : 'init',
    isLogin: false,
    userCode: null,
    userNickname: null
});

export default handleActions({
    [SET_LOGIN_FORM]: (state, action) => {
        return state.set('mode', 'login');
    },
    [SET_AUTH_FORM]: (state, action) => {
        return state.set('mode', 'auth');
    },
    [SET_INIT_FORM]: (state, action) => {
        return state.set('mode', 'init');
    },
    [SIGN_USER]: (state, action) => {
        const { userCode, Nickname } = action.payload.data;
        return {
            isLogin: true,
            userCode: userCode,
            userNickname: Nickname
        }
    },
    [UPDATE_USER]: (state, action) => {
        const { userCode, Nickname } = action.payload.data;
        return {
            ...state,
            userCode: userCode,
            userNickname: Nickname
        }
    },
    [SIGN_OUT_USER]: (state, action) => {
        return {
            isLogin: false,
            userCode: null,
            userNickname: null
        }
    }
}, initialState);