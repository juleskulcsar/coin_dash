import axios from 'axios';
import { GET_EXCHANGES, GET_EXCHANGES_ERROR } from './types';

export const getExchanges = () => async dispatch => {
    try {
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/exchanges`
        );
        dispatch({
            type: GET_EXCHANGES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_EXCHANGES_ERROR,
            payload: {
                msg: err,
                status: err
            }
        });
    }
};
