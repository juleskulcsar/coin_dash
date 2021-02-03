import axios from 'axios';
import { GET_COIN_DATA, GET_COIN_DATA_ERROR } from './types';

//get coin data
export const getCoinData = coin => async dispatch => {
    try {
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${coin}`
        );
        dispatch({
            type: GET_COIN_DATA,
            payload: res.data
        });
        console.log('res.data in coinData: ', res.data);
    } catch (err) {
        dispatch({
            type: GET_COIN_DATA_ERROR,
            payload: {
                msg: err,
                status: err
            }
        });
    }
};
