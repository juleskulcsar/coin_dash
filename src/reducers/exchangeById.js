import { GET_EXCHANGE } from '../actions/types';

const initialState = {
    exchange: [],
    loading: true,
    error: {}
};

export default function exchangeById(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_EXCHANGE:
            return {
                ...state,
                exchange: payload,
                loading: false
            };

        default:
            return state;
    }
}
