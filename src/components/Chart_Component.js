import React, { useEffect } from 'react';
import Chart from 'chart.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHistoricalData } from '../actions/historicalData';
import { Spinner } from './Spinner';

const Canvas = styled.canvas`
    filter: drop-shadow(1px 4px 12px #101820);
    border-radius: 20px;
    margin-bottom: 20px;
    background: linear-gradient(
        111.29deg,
        rgba(255, 255, 255, 0.43) -1.83%,
        rgba(255, 255, 255, 0) 189.95%
    );
    box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(70px);
`;

const CanvasWrapper = styled.div`
    /* width: 800px; */
    width: 60vw;
    max-width: 1200px;
    height: 50%;
    /* max-height: 20vw; */
    position: relative;
    @media (max-width: 768px) {
        width: 300px;
    }
    @media (min-width: 2560px) {
        max-height: 20vw;
    }
`;

const myChart1 = (data, coin) => {
    const ctx = document.getElementById('my_Chart');
    let c = ctx.getContext('2d');
    let gradientLine = c.createLinearGradient(0, 0, 0, ctx.height);
    gradientLine.addColorStop(0, 'rgba(250,174,50,1)');
    gradientLine.addColorStop(1, 'rgba(250,174,50,0)');
    if (window.myChart1 != undefined) window.myChart1.destroy();
    window.myChart1 = new Chart(ctx, {
        type: 'line',
        // scaleFontColor: 'white',
        data: {
            labels: data[2],
            datasets: [
                {
                    label: 'price',
                    // backgroundColor: gradientLine,
                    borderColor: '#153144',
                    data: data[0],
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
                text: `${coin.coin} price`,
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

const Chart_Component = ({
    getHistoricalData,
    historicalData: { historicalDataLoad },
    param
}) => {
    useEffect(() => {
        getHistoricalData(param);
    }, [getHistoricalData, param]);
    useEffect(() => {
        myChart1(historicalDataLoad, param);
    }, [myChart1, historicalDataLoad]);

    return (
        <CanvasWrapper>
            <Canvas id='my_Chart' />
        </CanvasWrapper>
    );
};

Chart_Component.propTypes = {
    getHistoricalData: PropTypes.func.isRequired,
    historicalDataLoad: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    historicalData: state.historicalData
});
export default connect(mapStateToProps, { getHistoricalData })(Chart_Component);
