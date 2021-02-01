import { GET_COIN_DATA } from '../actions/types';

const initialState = {
    coinDataLoad: [],
    coin: 'bitcoin',
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_COIN_DATA:
            return {
                ...state,
                coinDataLoad: payload,
                loading: false
            };

        default:
            return state;
    }
}
