import { GET_EXCHANGE_VOLUME } from '../actions/types';

const initialState = {
    exchangeVolumeLoad: [],
    loading: true,
    params: { id: 'aax' },
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_EXCHANGE_VOLUME:
            return {
                ...state,
                exchangeVolumeLoad: payload,
                loading: false
            };

        default:
            return state;
    }
}
