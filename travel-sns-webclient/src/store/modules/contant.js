import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const GET_CONTANT_INFO = "contant/GET_CONTANT_INFO";

export const getContantInfo = createAction(GET_CONTANT_INFO);

const initialState = Map({
    items: []
});

export default handleActions({
    [GET_CONTANT_INFO]: (state, action) => {
        const item = {
            title: '여행가즈아',
            like: 1,
            comment: 0,
            write: 'jinho',
            item: {
                data : 'new Date'
            },
            place: {
                country : 'korea',
                city: 'seoul'
            }
        }
        return state.setIn('items', item);
    }
}, initialState);