import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
  

const Wind=()=>{
    const score = 10
return (
    <div>
        <CircularProgressbar
        value={score}
        circleRatio={0.5}
        style={{
            trails:{
                strokeLinecap: 'butt',
                transform: 'rotate(1turn)',
                transformOrigin: 'center center'
            },
            path:{
                strokeLinecap: 'butt',
                transform: 'rotate(1turn)',
                transformOrigin: 'center center',
                stroke: '#000'
            },
            text: {
                fill: '#ddd',
            }
        }}
        strokeWidth={10}
    />
    </div>
)
}

export default Wind;