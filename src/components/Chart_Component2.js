import React, { useEffect } from 'react';
import Chart from 'chart.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExchangeVolume } from '../actions/exchangeVolume';

const Canvas = styled.canvas`
    filter: drop-shadow(1px 4px 12px #101820);
    border-radius: 20px;
    margin-top: 20px;
    background: linear-gradient(
        111.29deg,
        rgba(255, 255, 255, 0.1) -1.83%,
        rgba(255, 255, 255, 0) 189.95%
    );

    box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(70px);
`;

const CanvasWrapper = styled.div`
    width: 750px;
    height: 60%;
    @media (max-width: 768px) {
        width: 300px;
    }
`;

const myChart = (props, param) => {
    const ctx = document.getElementById('my_Chart2');
    let c = ctx.getContext('2d');
    let gradientLine = c.createLinearGradient(0, 0, 0, ctx.height);
    gradientLine.addColorStop(0, '#8c9aa3');
    gradientLine.addColorStop(1, '#5b6f7c');
    if (window.myChart) window.myChart.destroy();
    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: props[1],
            datasets: [
                {
                    label: 'volume',
                    // backgroundColor: gradientLine,
                    borderColor: '#d6dbde',
                    data: props[0],
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
                            display: true
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            beginAtZero: false,
                            fontColor: 'white',
                            display: true
                        }
                    }
                ]
            },
            tooltips: {
                mode: 'nearest'
            },
            title: {
                display: true,
                text: `${param} volumes`,
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

function Chart_Component2({
    exchangeVolumes: { exchangeVolumeLoad, params },
    param
}) {
    useEffect(() => {
        myChart(exchangeVolumeLoad, param);
    }, [myChart, exchangeVolumeLoad]);

    return (
        <CanvasWrapper>
            <Canvas id='my_Chart2' />
        </CanvasWrapper>
    );
}

Chart_Component2.propTypes = {
    getExchangeVolume: PropTypes.func.isRequired,
    exchangeVolumeLoad: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    exchangeVolumes: state.exchangeVolumes,
    exchanges: state.exchanges
});
export default connect(mapStateToProps, {
    getExchangeVolume
})(Chart_Component2);
