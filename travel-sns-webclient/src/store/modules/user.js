import { createAction, handleActions} from 'redux-actions';

const SET_LOGIN_FORM = "user/SET_LOGIN_FORM";
const SET_AUTH_FORM = "user/SET_AUTH_FORM";
const SET_INIT_FORM = "user/SET_INIT_FORM";

export const setLoginForm = createAction(SET_LOGIN_FORM);
export const setAuthForm = createAction(SET_AUTH_FORM);
export const setInitForm = createAction(SET_INIT_FORM);

const initialState = {
    mode : 'init'
};

export default handleActions({
    [SET_LOGIN_FORM]: (state, action) => {
        return {
            mode: 'login'
        };
    },
    [SET_AUTH_FORM]: (state, action) => {
        return {
            mode : 'auth'
        };
    },
    [SET_INIT_FORM]: (state, action) => {
        return {
            mode :'init'
        };
    }
}, initialState);