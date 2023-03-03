import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

const Humidity = () => {
    const humidity = 67;
    const [good,setGood]= useState('');
    const [normal,setNormal]= useState('');
    const [bad,setBad]= useState('');

    const checkHumidity = (humid)=>{
      if(humid<=30){
        setGood('#9dc3ef');
        setNormal('#dcdcdc');
        setBad('#dcdcdc')
      }
      else if(humid<=70){
        setGood('#9dc3ef');
        setNormal('#9dc3ef');
        setBad('#dcdcdc')
      }
      else{
        setGood('#9dc3ef');
        setNormal('#9dc3ef');
        setBad('#9dc3ef')
      }
    }

    useEffect(()=>{
      checkHumidity(humidity)
    },[])
    
  return (
    <div className='bg-white rounded-5' style={{width:'33%',padding:'30px',paddingTop:'20px', paddingBottom:'20px'}}>
        <div className='d-flex justify-content-between' >
        <h6 style={{fontSize:'0.9rem'}}>Humidity</h6>
        <div className='rounded-2' style={{backgroundColor:'#5c9ce5'}}><FontAwesomeIcon style={{color:'white',width:'30px'}} icon={faDroplet}/></div>
        </div>
    <div className='d-flex justify-content-center'>
        <h6 className='fw-bold' style={{fontSize:'1.2rem'}}>{humidity}%</h6>
        <h6 style={{fontSize:'0.7rem',paddingTop:'6px',paddingLeft:'5px'}}>bad</h6>
    </div>
    <div className='d-flex justify-content-between' style={{marginBottom:'20px'}}>
        <div style={{width:'60px',height:'7px',backgroundColor:'transparent'}}>good</div>
        <div style={{width:'60px',height:'7px',backgroundColor:'transparent'}}>normal</div>
        <div style={{width:'60px',height:'7px',backgroundColor:'transparent'}}>bad</div>
    </div>
    <div className='d-flex justify-content-between'>
        <div style={{width:'60px',height:'9px',backgroundColor:`${good}`,borderRadius:'4px'}}></div>
        <div style={{width:'60px',height:'9px',backgroundColor:`${normal}`,borderRadius:'4px'}}></div>
        <div style={{width:'60px',height:'9px',backgroundColor:`${bad}`,borderRadius:'4px'}}></div>
    </div>
    </div>
  )
}

export default Humidity;
