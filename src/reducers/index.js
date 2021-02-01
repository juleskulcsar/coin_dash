import { combineReducers } from 'redux';
import historicalData from './historicalData';
import coinsList from './coinsList';
import coinData from './coinData';

export default combineReducers({
    historicalData,
    coinsList,
    coinData
});
