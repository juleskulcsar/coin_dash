import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Chart from 'chart.js';
import { getGlobalData } from '../actions/globalData';
import { Spinner } from './Spinner';

const CanvasWrapper = styled.div`
    width: 800px;
    height: 50%;
    position: relative;
    @media (max-width: 768px) {
        width: 300px;
    }
`;

const Canvas = styled.canvas`
    filter: drop-shadow(1px 4px 12px #101820);
    border-radius: 20px;
    margin-bottom: 20px;

    /* border: 1px solid rgb(235, 233, 233); */
    background: linear-gradient(
        111.29deg,
        rgba(255, 255, 255, 0.43) -1.83%,
        rgba(255, 255, 255, 0) 189.95%
    );
    box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(70px);
`;

const areaChart = data => {
    const ctx = document.getElementById('my_Chart4');
    let c = ctx.getContext('2d');
    const marketCapPercentage = data.globalDataLoad.market_cap_percentage;
    const labels = Object.keys(marketCapPercentage);
    const values = Object.values(marketCapPercentage);
    if (window.areaChart) window.areaChart.destroy();
    window.areaChart = new Chart(ctx, {
        data: {
            labels: labels,
            datasets: [
                {
                    data: values,
                    borderColor: '#153144',
                    borderWidth: 1,
                    hoverBackgroundColor: '#e47656',
                    hoverBorderColor: 'white',
                    backgroundColor: '#e47656'
                }
            ]
        },
        type: 'bar',
        options: {
            responsive: true,
            scaleFontColor: 'white',
            maintainAspectRatio: true,
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
                text: `market cap %`,
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

const PolarAreaChart = globalDataLoad => {
    useEffect(() => {
        areaChart(globalDataLoad);
    }, [globalDataLoad]);

    return (
        <CanvasWrapper>
            <Canvas id='my_Chart4' />
        </CanvasWrapper>
    );
};

export default PolarAreaChart;
