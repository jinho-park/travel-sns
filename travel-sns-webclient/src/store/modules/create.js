import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const SET_MODAL = "create/SET_MODAL";
const DELETE_DATE = "create/DELETE_DATE";
const ADD_DATE = "create/ADD_DATE";
const CHANGE_DATA = "create/CHANGE_DATA";
const TEMP_SAVE_DATA = "create/TEMP_SAVE_DATA";
const POST_DATA = "create/POST_DATA";
const ADD_TAG = "create/ADD_TAG";

export const setModal = createAction(SET_MODAL);
export const deleteDate = createAction(DELETE_DATE);
export const addDate = createAction(ADD_DATE);
export const changeData = createAction(CHANGE_DATA);
export const tempSaveData = createAction(TEMP_SAVE_DATA);
export const postData = createAction(POST_DATA);
export const addTag = createAction(ADD_DATE);

const initialState = Map({
    visible: false,
    title : '',
    country : 'Korea, Republic of',
    city : 'Seoul',
    tag : List(),
    item : List()
})

export default handleActions({
    [SET_MODAL]: (state, action) => {
        const visible = state.get('visible');
        
        return state.set('visible', !visible);
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
        const { name, value } = action.payload;

        return state.set(name, value);
    },
    [TEMP_SAVE_DATA]: (state, action) => {

    },
    [POST_DATA]: (state, action) => {

    },
    [ADD_TAG]: (state, actions) => {

    }
}, initialState);