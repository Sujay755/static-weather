import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';

const FeelsLike = () => {
    const feel = 33
  return (
    <div className='bg-white rounded-5' style={{width:'32%',padding:'30px',paddingTop:'20px', paddingBottom:'20px',marginTop:'20px',marginLeft:'20px'}}>
        <div className='d-flex justify-content-between' >
            <h6 style={{fontSize:'0.9rem'}}>Feels like</h6>
            <div className='rounded-2' style={{backgroundColor:'#5c9ce5'}}><FontAwesomeIcon style={{color:'white',width:'30px'}} icon={faTemperatureThreeQuarters}/></div>
        </div>
        <div className='d-flex justify-content-center'>
            <h6 className='fw-bold' style={{fontSize:'1.2rem'}}>{feel}<span>&#176;</span></h6>
        </div>
        <div className='d-flex justify-content-between' style={{marginBottom:'20px'}}>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent',fontSize:'0.8rem'}}>0<span>&#176;</span></div>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent',fontSize:'0.8rem'}}>25<span>&#176;</span></div>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent',fontSize:'0.8rem'}}>50<span>&#176;</span></div>
        </div>
        <div className='progress rounded' style={{backgroundColor:'#dcdcdc',height:'9px'}}>
            <div className='progress-bar rounded' style={{height:'100%',width:`${feel}%`,backgroundColor:'#9dc3ef'}}></div>
        </div>
    </div>
  )
}

export default FeelsLike;