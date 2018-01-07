import { createAction, handleActions} from 'redux-actions';

const LOCAL_REGISTER = "auth/LOCAL_REGISTER";
const SOCIAL_REGISTER = "auth/SOCIAL_REGISTER";
const DIFF_PASSWORD = "auth/DIFF_PASSWORD";
const SET_INPUT = "auth/SET_INPUT";

export const localRegister = createAction(LOCAL_REGISTER);
export const socialRegister = createAction(SOCIAL_REGISTER);
export const diffPassword = createAction(DIFF_PASSWORD);
export const setInput = createAction(SET_INPUT);

const initialState = {
    error:{
        email: false,
        checkpassword: false,
        nickname : false
    },
    form: {
        email : '',
        password : '',
        password2 : '',
        nickname : ''
    },
    loginResult : null
};

export default handleActions({
    [LOCAL_REGISTER]: (state, action) => {
        const { result } = action.payload;
        return {
            loginResult : result
        }
    },
    [SOCIAL_REGISTER]: (state, action) => {
        const { result } = action.payload;
        return {
            loginResult : result
        }
    },
    [DIFF_PASSWORD]: (state, action) => {
        return {
            ...state,
            error : {
                checkpassword : true
            }
        }
    },
    [SET_INPUT]: (state, action) => {
        console.log(action);
        return {
            ...state
        }
    }
}, initialState);