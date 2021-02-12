import { GET_GLOBAL_DATA } from '../actions/types';

const initialState = {
    globalDataLoad: [],
    loading: true,
    error: {}
};

export default function globalData(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_GLOBAL_DATA:
            return {
                ...state,
                globalDataLoad: payload,
                loading: false
            };

        default:
            return state;
    }
}
