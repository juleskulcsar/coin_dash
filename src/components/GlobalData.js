import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGlobalData } from '../actions/globalData';
import { Spinner } from './Spinner';
import PolarAreaChart from './PolarAreaChart';

const GlobalData = ({
    getGlobalData,
    globalData: { globalDataLoad, loading }
}) => {
    useEffect(() => {
        getGlobalData();
    }, [getGlobalData]);

    // const marketCapPercentage = globalDataLoad.market_cap_percentage;
    // const labels = Object.keys(marketCapPercentage);
    // const values = Object.values(marketCapPercentage);
    console.log('global data: ', globalDataLoad);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <PolarAreaChart globalDataLoad={globalDataLoad} />
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
