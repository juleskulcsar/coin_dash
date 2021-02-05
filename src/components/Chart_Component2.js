import React, { useEffect } from 'react';
import Chart from 'chart.js';
import styled from 'styled-components';

const Canvas = styled.canvas`
    filter: drop-shadow(1px 4px 12px #101820);
    border-radius: 20px;
    margin-top: 20px;

    border: 1px solid rgb(235, 233, 233);
    background: linear-gradient(
        111.29deg,
        rgba(255, 255, 255, 0.1) -1.83%,
        rgba(255, 255, 255, 0) 189.95%
    );

    box-shadow: 50px, 60px, 189px rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(70px);
`;

export default function Chart_Component2(props) {
    useEffect(() => {
        const ctx = document.getElementById('my_Chart2');
        let c = ctx.getContext('2d');
        let gradientLine = c.createLinearGradient(0, 0, 0, ctx.height);
        gradientLine.addColorStop(0, '#D13C18');
        gradientLine.addColorStop(1, '#F6B4A4');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: props.dates,
                datasets: [
                    {
                        label: 'volume',
                        // backgroundColor: gradientLine,
                        borderColor: 'white',
                        data: props.values,
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
                    text: `${props.params} volumes`,
                    fontSize: 20,
                    fontColor: 'white'
                }
                // events: ['click']
            }
        });
    }, [props]);
    return (
        <div style={{ width: '800px', height: '400px' }}>
            <Canvas id='my_Chart2' width='800' height='400' />
        </div>
    );
}
