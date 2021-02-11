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
    bottom: 2em;
    border-radius: 20px;
    padding: 0 2em;
    height: 98vh;
    @media (max-width: 768px) {
        top: 40em;
    }
`;

const RightPanel = ({ getCoinData, coinData: { coinDataLoad }, coin }) => {
    useEffect(() => {
        getCoinData(coin);
    }, [getCoinData]);

    return (
        <>
            {Object.keys(coinDataLoad).length == 0 ? (
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
    coinDataLoad: PropTypes.object.isRequired
    // coin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    coinData: state.coinData
});
export default connect(mapStateToProps, { getCoinData })(
    withRouter(RightPanel)
);
