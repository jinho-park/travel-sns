import { createAction, handleActions } from 'redux-actions';

const SET_MODAL = "create/SET_MODAL";
const DELETE_DATE = "create/DELETE_DATE";
const ADD_DATE = "create/ADD_DATE";
const CHANGE_DATA = "create/CHANGE_DATA";
const TEMP_SAVE_DATA = "create/TEMP_SAVE_DATA";
const POST_DATA = "create/POST_DATA";

export const setModal = createAction(SET_MODAL);
export const deleteDate = createAction(DELETE_DATE);
export const addDate = createAction(ADD_DATE);
export const changeData = createAction(CHANGE_DATA);
export const tempSaveData = createAction(TEMP_SAVE_DATA);
export const postData = createAction(POST_DATA);

const initialState = {
    visible : false,
    title : '',
    country : null,
    city : null,
    tag : [],
    item : []
};

export default handleActions({
    [SET_MODAL]: (state, action) => {
        const visible = this.state.visible;
        if(visible) return {
            visible : false
        }
        return {
            visible : true
        }
    },
    [DELETE_DATE]: (state, action)=>{
        console.log(action);
        return {
            
        }
    },
    [ADD_DATE]: (state, action) => {
        console.log(action);
        return {
        }
    },
    [CHANGE_DATA]: (state, action) => {

    },
    [TEMP_SAVE_DATA]: (state, action) => {

    },
    [POST_DATA]: (state, action) => {

    }
}, initialState);