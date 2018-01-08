import { createAction, handleActions} from 'redux-actions';
import { Map, fromJS } from 'immutable';
import * as AuthAPI from 'api/auth';

const LOCAL_REGISTER = "auth/LOCAL_REGISTER";
const SOCIAL_REGISTER = "auth/SOCIAL_REGISTER";
const DIFF_PASSWORD = "auth/DIFF_PASSWORD";
const SET_INPUT = "auth/SET_INPUT";

export const localRegister = createAction(LOCAL_REGISTER, AuthAPI.localRegister);
export const socialRegister = createAction(SOCIAL_REGISTER);
export const diffPassword = createAction(DIFF_PASSWORD);
export const setInput = createAction(SET_INPUT);

const initialState = Map({
    error: Map({
        email: false,
        checkpassword: false,
        nickname : false
    }),
    form: Map({
        email : '',
        password : '',
        password2 : '',
        nickname : ''
    }),
    loginResult : null
}) ;

export default handleActions({
    [LOCAL_REGISTER]: (state, action) => {
        const { result } = action;
        return state.set('error', result);
    },
    [SOCIAL_REGISTER]: (state, action) => {
        const { result } = action.payload;
        return state.set('error', result);
    },
    [DIFF_PASSWORD]: (state, action) => {
        return state.set(['error', 'checkpassword'], true);
    },
    [SET_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['form', name], value);
    }
}, initialState);