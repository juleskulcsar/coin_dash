import axios from 'axios';
import { GET_EXCHANGE, GET_EXCHANGE_ERROR } from './types';

export const getExchangeById = id => async dispatch => {
    try {
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/exchanges/${id}`
        );
        dispatch({
            type: GET_EXCHANGE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_EXCHANGE_ERROR,
            payload: {
                msg: err,
                status: err
            }
        });
    }
};
