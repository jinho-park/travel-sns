import { createAction, handleActions } from 'redux-actions';

const GET_CONTANT_INFO = "contant/GET_CONTANT_INFO";

export const getContantInfo = createAction(GET_CONTANT_INFO);

const initialState = {
    items: []
};

export default handleActions({
    [GET_CONTANT_INFO]: (state, action) => {
        return {
            items: [{
                title: '여행가즈아',
                like: 0,
                comment: 0,
                wirte: 'jinho',
                item: {
                    date : 'new Date()'
                },
                place: {
                    country: 'korea',
                    city: 'seoul'
                }
            }]
        };
    }
}, initialState);