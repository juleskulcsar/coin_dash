import { GET_EXCHANGES } from '../actions/types';

const initialState = {
    exchanges: [],
    loading: true,
    error: {}
};

export default function exchanges(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_EXCHANGES:
            return {
                ...state,
                exchanges: payload,
                loading: false
            };

        default:
            return state;
    }
}
