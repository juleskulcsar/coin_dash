import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGlobalData } from '../actions/globalData';
import { Spinner } from './Spinner';
import PolarAreaChart from './PolarAreaChart';
import GlobalTable from './GlobalTable';

const GlobalData = ({
    getGlobalData,
    globalData: { globalDataLoad, loading }
}) => {
    useEffect(() => {
        getGlobalData();
    }, [getGlobalData]);

    console.log('global data: ', globalDataLoad);

    let coins = [];

    for (const property in globalDataLoad.total_volume) {
        let coin = {};
        coin.coin = property;
        coin.volume = globalDataLoad.total_volume[property];
        coin.marketCap = globalDataLoad.total_market_cap[property];
        coins = [...coins, coin];
    }

    // for (let i = 0; i < coins.length; i++) {
    //     coins[i][Object.keys(coins[i])[0]].marketCap =
    //         globalDataLoad.total_market_cap[Object.keys(coins[i])[0]];
    // }
    console.log('final array: ', coins);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <PolarAreaChart globalDataLoad={globalDataLoad} />
                    <GlobalTable coins={coins} />
                </>
            )}
        </>
    );
};

GlobalData.propTypes = {
    getGlobalData: PropTypes.func.isRequired,
    globalDataLoad: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    globalData: state.globalData
});
export default connect(mapStateToProps, { getGlobalData })(
    withRouter(GlobalData)
);
