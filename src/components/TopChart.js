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

const Panel = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Wrapper = styled.div`
    display: flex;
    position: relative;
    top: 0.5em;
    border-radius: 20px;
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
            <div>
                <TopScoreCards />
                <Wrapper>
                    <div
                        style={{
                            padding: '2em',
                            borderRadius: '20px'
                        }}
                    >
                        <div style={{ display: 'block' }}>
                            <ChartComponent
                                values={historicalDataLoad[0]}
                                dates={historicalDataLoad[2]}
                                params={params.coin}
                            />
                        </div>
                        <div style={{ display: 'block' }}>
                            <ChartComponent3
                                totalVolumes={historicalDataLoad[1]}
                                dates={historicalDataLoad[2]}
                                params={params.coin}
                            />
                        </div>
                    </div>
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
