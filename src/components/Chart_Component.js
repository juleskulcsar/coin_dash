import React, { useEffect } from 'react';
import Chart from 'chart.js';

export default function Chart_Component(props) {
    useEffect(() => {
        const ctx = document.getElementById('my_Chart');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: props.dates,
                datasets: [
                    {
                        label: 'price',
                        data: props.values,
                        borderWidth: 1
                    }
                ]
            }
        });
    }, []);
    return (
        <div style={{ width: '800px', height: '300px' }}>
            <canvas id='my_Chart' width='800' height='300' />
        </div>
    );
}
