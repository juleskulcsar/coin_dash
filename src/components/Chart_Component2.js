import React, { useEffect } from 'react';
import Chart from 'chart.js';

export default function Chart_Component2({ dates, marketCaps }) {
    useEffect(() => {
        const ctx = document.getElementById('my_Chart2');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: 'value',
                        data: marketCaps,
                        borderWidth: 1
                    }
                ]
            }
        });
    }, []);
    return (
        <div style={{ width: '800px', height: '300px' }}>
            <canvas id='my_Chart2' width='800' height='300' />
        </div>
    );
}
