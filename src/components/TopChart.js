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
    justify-content: space-around;
    flex-direction: row;
    width: 80%;
    height: 98vh;
    /* margin: 0 auto; */
    position: relative;
    left: 10em;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
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
        top: 38em;
    }
    @media (min-width: 2560px) {
        height: 100%;
    }
`;

const TopSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 37vh; */
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
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '98vh'
                }}
            >
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
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '98vh'
                }}
            >
                <RightPanel coinDataLoad={coinDataLoad} coin={param.coin} />
            </div>
        </Panel>
    );
};

const mapStateToProps = state => ({
    coinData: state.coinData
});
export default connect(mapStateToProps)(withRouter(TopChart));
