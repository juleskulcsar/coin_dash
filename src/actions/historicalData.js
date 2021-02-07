import axios from 'axios';
import timeConverter from '../utils/timeConverter';
import { GET_HISTORICAL_DATA, HISTORICAL_DATA_ERROR } from './types';

//get historical data
export const getHistoricalData = params => async dispatch => {
    try {
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${params.coin}/market_chart?vs_currency=${params.currency}&days=${params.days}&interval=${params.interval}`
        );
        console.log('wtf??? ', res.data);
        let prices = [];
        let volumes = [];
        let marketCaps = [];
        let dates = [];
        let data = [];
        for (let i = 0; i < res.data.prices.length; i++) {
            prices.push(res.data.prices[i][1]);
            volumes.push(res.data.total_volumes[i][1]);
            marketCaps.push(res.data.market_caps[i][1]);
            dates.push(timeConverter(res.data.prices[i][0]));
        }
        data.push(prices, volumes, dates, marketCaps);
        // console.log('data is: ', data);
        dispatch({
            type: GET_HISTORICAL_DATA,
            payload: data
        });
        // console.log('res.data: ', res.data);
    } catch (err) {
        dispatch({
            type: HISTORICAL_DATA_ERROR,
            payload: {
                msg: err,
                status: err
            }
        });
    }
};
