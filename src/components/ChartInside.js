import React from "react";
import { Line } from "react-chartjs-2";
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
)


const ChartInside = () => {
    const data = {
        labels: ['30%','45%','69%', '15%', '5%', '88%', '40%', '23%'],
        datasets: [
            {
                labels: 'Sales of the week',
                data: [30, 45, 69, 15, 5, 88, 40, 23],
                backgroundColor: '#5c9ce5',
                borderColor: '#5c9ce5',
                fill: true,
                tension: 0

            }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 10 | 1,
        scales: {
            y: {
                display: false,
                beginAtZero: true,
                max: 100,
                grid: {
                    display: false,
                }
            },
        
        },
            elements: {
                point: {
                    radius: 0
                }
            }
    }
  return (
    <div style={{width:'100%'}}>
      <Line className="px-4" style={{alignContent:'stretch'}}  data={data}
      options= {options}
       />
    </div>
  );
};

export default ChartInside;