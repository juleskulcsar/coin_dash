import axios from 'axios';
import timeConverter from '../utils/timeConverter';
import { GET_EXCHANGE_VOLUME, GET_EXCHANGE_VOLUME_ERROR } from './types';

//get historical data
export const getExchangeVolume = params => async dispatch => {
    try {
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/exchanges/${params.id}/volume_chart?days=30`
        );
        console.log('wtf volume??? ', res.data);
        let volumes = [];
        let dates = [];
        let data = [];
        for (let i = 0; i < res.data.length; i++) {
            volumes.push(res.data[i][1]);
            dates.push(timeConverter(res.data[i][0]));
        }
        data.push(volumes, dates);
        // console.log('data is: ', data);
        dispatch({
            type: GET_EXCHANGE_VOLUME,
            payload: data
        });
        console.log('res.data: ', res.data);
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
