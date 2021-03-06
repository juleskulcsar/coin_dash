import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { rgba, modularScale } from 'polished';
import { getGlobalData } from '../actions/globalData';
import { Spinner } from './Spinner';
import PolarAreaChart from './PolarAreaChart';
import GlobalTable from './GlobalTable';
import GlobalList from './GlobalList';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 90vh;
    margin-left: 2em;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

const RightFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 2em;
    @media (min-width: 2560px) {
        /* justify-content: space-around; */
        justify-content: flex-start;
        margin-top: 2em;
        margin-left: 1em;
    }
`;

const GlobalData = ({
    getGlobalData,
    globalData: { globalDataLoad, loading }
}) => {
    useEffect(() => {
        getGlobalData();
    }, [getGlobalData]);

    let coins = [];
    for (const property in globalDataLoad.total_volume) {
        let coin = {};
        coin.coin = property;
        coin.volume = globalDataLoad.total_volume[property];
        coin.marketCap = globalDataLoad.total_market_cap[property];
        coins = [...coins, coin];
    }

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <Wrapper>
                    <GlobalTable coins={coins} />
                    <RightFlex>
                        <PolarAreaChart globalDataLoad={globalDataLoad} />
                        <GlobalList globalDataLoad={globalDataLoad} />
                    </RightFlex>
                </Wrapper>
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
