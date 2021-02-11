import React, { useEffect } from 'react';
import Chart from 'chart.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHistoricalData } from '../actions/historicalData';
import { Spinner } from './Spinner';

const Canvas = styled.canvas`
    /* border: 1px solid rgb(235, 233, 233); */
    background: linear-gradient(
        111.29deg,
        rgba(255, 255, 255, 0.43) -1.83%,
        rgba(255, 255, 255, 0) 189.95%
    );
    box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(70px);
    filter: drop-shadow(1px 4px 12px #101820);
    border-radius: 20px;
    margin-top: 20px;
`;

const CanvasWrapper = styled.div`
    width: 800px;
    height: 50%;
    position: relative;
    @media (max-width: 768px) {
        width: 300px;
    }
`;

const myChart = (data, coin) => {
    const ctx = document.getElementById('my_Chart3');
    let c = ctx.getContext('2d');
    let gradientLine = c.createLinearGradient(0, 0, 0, ctx.height);
    gradientLine.addColorStop(0, '#D13C18');
    gradientLine.addColorStop(1, '#F6B4A4');
    if (window.myChart) window.myChart.destroy();
    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data[2],
            datasets: [
                {
                    label: 'total volumes',
                    borderColor: '#6a1d06',
                    data: data[1],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            scaleFontColor: 'white',
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 5,
                    left: 15,
                    right: 15,
                    bottom: 15
                }
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: false,
                            fontColor: 'white',
                            display: false
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            beginAtZero: false,
                            fontColor: 'white',
                            display: false
                        }
                    }
                ]
            },
            tooltips: {
                mode: 'nearest'
            },
            title: {
                display: true,
                text: `${coin.coin} volume`,
                fontSize: 20,
                fontColor: 'white'
            },
            legend: {
                labels: {
                    boxWidth: 0
                }
            }
            // events: ['click']
        }
    });
};

const Chart_Component3 = ({
    getHistoricalData,
    historicalData: { historicalDataLoad },
    param
}) => {
    useEffect(() => {
        getHistoricalData(param);
    }, [getHistoricalData, param]);
    useEffect(() => {
        myChart(historicalDataLoad, param);
    }, [myChart, historicalDataLoad]);

    return (
        <CanvasWrapper>
            <Canvas id='my_Chart3' />
        </CanvasWrapper>
    );
};

Chart_Component3.propTypes = {
    getHistoricalData: PropTypes.func.isRequired,
    historicalDataLoad: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    historicalData: state.historicalData
});
export default connect(mapStateToProps, { getHistoricalData })(
    Chart_Component3
);
