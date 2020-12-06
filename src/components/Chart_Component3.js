import React, { useEffect } from 'react';
import Chart from 'chart.js';

export default function Chart_Component3({ dates, totalVolumes }) {
    useEffect(() => {
        const ctx = document.getElementById('my_Chart3');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: 'total volumes',
                        data: totalVolumes,
                        borderWidth: 1
                    }
                ]
            }
        });
    }, []);
    return (
        <div style={{ width: '800px', height: '300px' }}>
            <canvas id='my_Chart3' width='800' height='300' />
        </div>
    );
}
