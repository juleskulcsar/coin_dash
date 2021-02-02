import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import RightCard from './RightCard';
import RightTable from './RightTable';
import { getCoinData } from '../actions/coinData';
import { Spinner } from './Spinner';

const ScoreCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 0.7em;
    border-radius: 20px;
`;

const Paragraph = styled.p`
    color: white;
    line-height: 1.6;
    font-size: 30px;
`;

const RightPanel = ({ getCoinData, coinData: { coinDataLoad, coin } }) => {
    useEffect(() => {
        getCoinData(coin);
    }, [getCoinData]);

    return (
        <>
            {coinDataLoad.length == 0 ? (
                <Spinner />
            ) : (
                <ScoreCardWrapper>
                    <RightCard coinDataLoad={coinDataLoad} />

                    <RightTable coinDataLoad={coinDataLoad} />
                </ScoreCardWrapper>
            )}
        </>
    );
};

RightPanel.propTypes = {
    getCoinData: PropTypes.func.isRequired,
    coinDataLoad: PropTypes.object.isRequired,
    coin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    coinData: state.coinData
});
export default connect(mapStateToProps, { getCoinData })(
    withRouter(RightPanel)
);
