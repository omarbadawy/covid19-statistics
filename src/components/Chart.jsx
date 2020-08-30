import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = (props) => {
    const [chartData, setChartData] = useState({});

    const chart = (props) => {
        setChartData({
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
                {
                    label: 'People',
                    data: [props.allCases.cases, props.allCases.recovered, props.allCases.deaths],
                    backgroundColor: ['#7F7FFF', '#7FFF7F', '#FF7F7F'],
                    borderWidth: 4,
                },
            ],
        });
    };

    useEffect(() => {
        chart(props);
    }, [props]);

    return (
        <div>
            <Bar data={chartData} />
        </div>
    );
};

export default Chart;
