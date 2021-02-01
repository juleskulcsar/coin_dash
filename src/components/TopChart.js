import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getHistoricalData } from '../actions/historicalData';
import ChartComponent from './Chart_Component';
import ChartComponent3 from './Chart_Component3';
import TopScoreCards from './TopScoreCards';

const Wrapper = styled.div`
    display: flex;
    position: relative;
    top: 0.5em;
    border-radius: 20px;
`;

const TopChart = ({
    getHistoricalData,
    historicalData: { historicalDataLoad, params }
}) => {
    useEffect(() => {
        getHistoricalData(params);
    }, [getHistoricalData]);

    return (
        <>
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
        </>
    );
};

TopChart.propTypes = {
    getHistoricalData: PropTypes.func.isRequired,
    historicalDataLoad: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    historicalData: state.historicalData
});
export default connect(mapStateToProps, { getHistoricalData })(
    withRouter(TopChart)
);
