import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getHistoricalData } from '../actions/historicalData';
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
    margin: 0 auto;
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
`;

const TopSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 37vh;
    @media (max-width: 768px) {
        position: relative;
    }
`;

const TopChart = ({
    getHistoricalData,
    historicalData: { historicalDataLoad, params },
    coinData: { coinDataLoad, coin }
}) => {
    useEffect(() => {
        getHistoricalData(params);
    }, [getHistoricalData]);

    console.log('historical: ', historicalDataLoad);

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
                    <CoinListDropdown />
                    <TopScoreCards />
                </TopSectionWrapper>
                <Wrapper>
                    <ChartComponent
                        values={historicalDataLoad[0]}
                        totalVolumes={historicalDataLoad[1]}
                        dates={historicalDataLoad[2]}
                        params={params.coin}
                    />
                    <ChartComponent3
                        totalVolumes={historicalDataLoad[1]}
                        dates={historicalDataLoad[2]}
                        params={params.coin}
                    />
                </Wrapper>
            </div>
            <div>
                <RightPanel coinDataLoad={coinDataLoad} />
            </div>
        </Panel>
    );
};

TopChart.propTypes = {
    getHistoricalData: PropTypes.func.isRequired,
    historicalDataLoad: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    coinDataLoad: PropTypes.object.isRequired,
    coin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    historicalData: state.historicalData,
    coinData: state.coinData
});
export default connect(mapStateToProps, { getHistoricalData })(
    withRouter(TopChart)
);
