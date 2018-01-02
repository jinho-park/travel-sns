import { createAction, handleActions} from 'redux-actions';

const SET_FORM = "user/SET_FORM";

export const setForm = createAction(SET_FORM);

const initialState = {
    mode : 'init'
};

export default handleActions({
    [SET_FORM]: (state, action) => {
        return {
            mode: 'login'
        };
    }
}, initialState);