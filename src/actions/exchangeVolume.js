import axios from 'axios';
import timeConverter from '../utils/timeConverter';
import { GET_EXCHANGE_VOLUME, GET_EXCHANGE_VOLUME_ERROR } from './types';

export const getExchangeVolume = id => async dispatch => {
    try {
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/exchanges/${id}/volume_chart?days=30`
        );

        let volumes = [];
        let dates = [];
        let data = [];
        for (let i = 0; i < res.data.length; i++) {
            volumes.push(res.data[i][1]);
            dates.push(timeConverter(res.data[i][0]));
        }
        data.push(volumes, dates);

        dispatch({
            type: GET_EXCHANGE_VOLUME,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: GET_EXCHANGE_VOLUME_ERROR,
            payload: {
                msg: err,
                status: err
            }
        });
    }
};
