import React, { useEffect } from 'react';
import Chart from 'chart.js';
import styled from 'styled-components';

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

const CanvasWrapper = styled.div`
    width: 800px;
    height: 50%;
    position: relative;
    @media (max-width: 768px) {
        width: 300px;
    }
`;

export default function Chart_Component(props) {
    useEffect(() => {
        const ctx = document.getElementById('my_Chart');
        let c = ctx.getContext('2d');
        let gradientLine = c.createLinearGradient(0, 0, 0, ctx.height);
        gradientLine.addColorStop(0, 'rgba(250,174,50,1)');
        gradientLine.addColorStop(1, 'rgba(250,174,50,0)');
        new Chart(ctx, {
            type: 'line',
            scaleFontColor: 'white',
            data: {
                labels: props.dates,
                datasets: [
                    {
                        label: 'price',
                        // backgroundColor: gradientLine,
                        borderColor: '#153144',
                        data: props.values,
                        borderWidth: 2
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
                    text: `${props.params} price`,
                    fontSize: 20,
                    fontColor: 'white'
                }
                // events: ['click']
            }
        });
    }, [props]);
    return (
        <CanvasWrapper>
            {/* <Canvas id='my_Chart' width='800' height='500' /> */}
            <Canvas id='my_Chart' />
        </CanvasWrapper>
    );
}
