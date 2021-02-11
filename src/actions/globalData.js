import axios from 'axios';
import { GET_GLOBAL_DATA, GET_GLOBAL_DATA_ERROR } from './types';

export const getGlobalData = () => async dispatch => {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/global`);
        dispatch({
            type: GET_GLOBAL_DATA,
            payload: res.data
        });
        console.log('res.data in globalData: ', res.data);
    } catch (err) {
        dispatch({
            type: GET_GLOBAL_DATA_ERROR,
            payload: {
                msg: err,
                status: err
            }
        });
    }
};
