import { GET_HISTORICAL_DATA } from '../actions/types';

const initialState = {
    historicalDataLoad: [],
    loading: true,
    params: { coin: 'bitcoin', currency: 'usd', days: '30', interval: 'daily' },
    error: {}
};

export default function historicalData(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_HISTORICAL_DATA:
            return {
                ...state,
                historicalDataLoad: payload,
                loading: false
            };

        default:
            return state;
    }
}
