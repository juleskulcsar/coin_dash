import { combineReducers } from 'redux';
import historicalData from './historicalData';
import coinsList from './coinsList';
import coinData from './coinData';
import exchanges from './exchanges';
import exchangeVolumes from './exchangeVolumes';
import exchange from './exchangeById';

export default combineReducers({
    historicalData,
    coinsList,
    coinData,
    exchanges,
    exchangeVolumes,
    exchange
});
