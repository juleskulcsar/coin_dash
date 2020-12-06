import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getHistoricalData } from '../actions/historicalData';
import ChartComponent from './Chart_Component';
import ChartComponent3 from './Chart_Component3';

const TopChart = ({
    getHistoricalData,
    historicalData: { historicalDataLoad, params }
}) => {
    useEffect(() => {
        getHistoricalData(params);
    }, [getHistoricalData, params]);

    return (
        <div>
            <div style={{ display: 'block' }}>
                <ChartComponent
                    values={historicalDataLoad[0]}
                    dates={historicalDataLoad[2]}
                />
            </div>
            <div style={{ display: 'block' }}>
                <ChartComponent3
                    totalVolumes={historicalDataLoad[1]}
                    dates={historicalDataLoad[2]}
                />
            </div>
        </div>
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
