import { combineReducers } from 'redux';
import historicalData from './historicalData';
import coinsList from './coinsList';
import coinData from './coinData';
import exchanges from './exchanges';
import exchangeVolumes from './exchangeVolumes';
import exchange from './exchangeById';
import globalData from './globalData';

export default combineReducers({
    historicalData,
    coinsList,
    coinData,
    exchanges,
    exchangeVolumes,
    exchange,
    globalData
});
