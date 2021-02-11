import axios from 'axios';
import { GET_COINS, GET_COINS_ERROR } from './types';

export const getCoins = () => async dispatch => {
    try {
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d%2C1y`
        );
        dispatch({
            type: GET_COINS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_COINS_ERROR,
            payload: {
                msg: err,
                status: err
            }
        });
    }
};
