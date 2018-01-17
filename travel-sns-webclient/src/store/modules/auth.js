import { createAction, handleActions} from 'redux-actions';
import { Map, fromJS } from 'immutable';
import * as AuthAPI from 'api/auth';
import { pender } from 'redux-pender';

const LOCAL_REGISTER = "auth/LOCAL_REGISTER";
const SOCIAL_REGISTER = "auth/SOCIAL_REGISTER";
const DIFF_PASSWORD = "auth/DIFF_PASSWORD";
const SET_INPUT = "auth/SET_INPUT";
const SET_ERROR = "auth/SET_ERROR";
const LOCAL_SIGN = "auth/LOCAL_SIGN";
const SOCIAL_SIGN = "auth/SOCIAL_SIGN";

export const localRegister = createAction(LOCAL_REGISTER, AuthAPI.localRegister);
export const socialRegister = createAction(SOCIAL_REGISTER);
export const diffPassword = createAction(DIFF_PASSWORD);
export const setInput = createAction(SET_INPUT);
export const setError = createAction(SET_ERROR);
export const localSign = createAction(LOCAL_SIGN, AuthAPI.localSign);
export const socialSign = createAction(SOCIAL_SIGN);

const initialState = Map({
    error: null,
    form: Map({
        email : '',
        password : '',
        password2 : '',
        nickname : ''
    }),
    loginResult: false,
    storageType : null
});

export default handleActions({
    ...pender({
        type: LOCAL_REGISTER,
        onSuccess: (state, action) => {
            const { error } = action.payload.data;

            if(error){
                state.set('error', error);
            }
        }
    }),
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
    },
    [SET_ERROR]: (state, action) => {
        const error = action.payload;
        return state.set('error', fromJS(error));
    },
    ...pender({
        type: LOCAL_SIGN,
        onSuccess: (state, action) => {
            const { accessToken, error } = action.payload.data;

            if(error){
                return state.set('error', fromJS(error));
            }else{
                if(typeof(Storage) !== "undefined"){
                    localStorage.setItem("userToken", accessToken);
                    return state.set('loginResult', true);
                }else{
                    console.log('cookie');
                    return state.set('loginResult', true);
                }
            }
        }
    })
}, initialState);