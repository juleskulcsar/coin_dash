import { GET_COINS } from '../actions/types';

const initialState = {
    coinsListData: [],
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_COINS:
            return {
                ...state,
                coinsListData: payload,
                loading: false
            };

        default:
            return state;
    }
}
