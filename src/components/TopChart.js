import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ChartComponent from './Chart_Component';
import ChartComponent3 from './Chart_Component3';
import TopScoreCards from './TopScoreCards';
import RightPanel from './RightPanel';
import CoinListDropdown from './CoinListDropdown';

const Panel = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    flex-direction: row;
    width: 80%;
    /* height: 98vh; */
    margin: 0 auto;
    position: relative;
    left: 2em;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        left: 0;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 20px;
    height: 50vh;
    margin-top: 1em;
    @media (max-width: 768px) {
        /* top: 35em; */
        width: 100%;
        height: 50vh;
        flex-shrink: 0;
    }
    @media (min-width: 2560px) {
        height: 100%;
    }
    @media (min-width: 1440px) {
        height: 55vh;
    }
`;

const TopSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const RightPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 98vh; */
    @media (max-width: 768px) {
        margin: 0 2em;
    }
`;

const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 98vh; */
    @media (max-width: 768px) {
        position: relative;
    }
`;

const TopChart = ({ coinData: { coinDataLoad } }) => {
    const [param, setParam] = useState({
        coin: 'bitcoin',
        currency: 'usd',
        days: '30',
        interval: 'daily'
    });

    const handleClick = currency => {
        param.coin = currency;
        setParam({ ...param });
    };

    return (
        <Panel>
            <TopWrapper>
                <TopSectionWrapper>
                    <CoinListDropdown
                        onChange={handleClick}
                        coin={param.coin}
                    />
                    <TopScoreCards param={param} />
                </TopSectionWrapper>
                <Wrapper>
                    <ChartComponent param={param} />
                    <ChartComponent3 param={param} />
                </Wrapper>
            </TopWrapper>
            <RightPanelWrapper>
                <RightPanel coinDataLoad={coinDataLoad} coin={param.coin} />
            </RightPanelWrapper>
        </Panel>
    );
};

const mapStateToProps = state => ({
    coinData: state.coinData
});
export default connect(mapStateToProps)(withRouter(TopChart));
