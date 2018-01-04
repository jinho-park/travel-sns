import { createAction, handleActions } from 'redux-actions';

const GET_CONTANT_INFO = "contant/GET_CONTANT_INFO";

export const getContantInfo = createAction(GET_CONTANT_INFO);

const initialState = {
    items: []
};

export default handleActions({
    [GET_CONTANT_INFO]: (state, action) => {
        return {
            item: action.payload
        };
    }
})