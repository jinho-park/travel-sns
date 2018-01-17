import { createAction, handleActions} from 'redux-actions';
import { Map } from 'immutable';

const SET_LOGIN_FORM = "user/SET_LOGIN_FORM";
const SET_AUTH_FORM = "user/SET_AUTH_FORM";
const SET_INIT_FORM = "user/SET_INIT_FORM";
const UPDATE_USER = "user/UPDATE_USER";
const GET_USER = "user/GET_USER";
const USER_SIGNOUT = "user/USER_SIGN"

export const setLoginForm = createAction(SET_LOGIN_FORM);
export const setAuthForm = createAction(SET_AUTH_FORM);
export const setInitForm = createAction(SET_INIT_FORM);
export const updateUser = createAction(UPDATE_USER);
export const getUser = createAction(GET_USER);
export const userSignout = createAction(userSignout);

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
    [UPDATE_USER]: (state, action) => {
        const { accessToken, nickname } = action.payload;
        return state.set('userCode', accessToken)
                    .set('userNickname', nickname)
    },
    [GET_USER]: (state, action) => {
        const { nickname } = action.payload;
        return state.set('isLogin', true)
                    .set('userNickname', nickname);
    },
    [USER_SIGNOUT]: (state, action) => {
        localStorage.removeItem("userToken");
        return state.set('isLogin', false)
                    .set('userNickname', null);
    }
}, initialState);