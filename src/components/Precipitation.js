import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';

const Precipitation = () => {
    const precip = 1.9
  return (
    <div className='bg-white rounded-5' style={{width:'33%',padding:'30px',paddingTop:'20px', paddingBottom:'20px',marginLeft:'20px'}}>
        <div className='d-flex justify-content-between' >
            <h6 style={{fontSize:'0.9rem'}}>Precipitation</h6>
            <div className='rounded-2' style={{backgroundColor:'#5c9ce5'}}><FontAwesomeIcon style={{color:'white',width:'30px'}} icon={faCloudRain}/></div>
        </div>
        <div className='d-flex justify-content-center'>
            <h6 className='fw-bold' style={{fontSize:'1.2rem'}}>{precip} cm</h6>
        </div>
        <div className='d-flex justify-content-between' style={{marginBottom:'20px'}}>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent'}}>1</div>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent'}}>2</div>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent'}}>3</div>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent'}}>4</div>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent'}}>5</div>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent'}}>6</div>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent'}}>7</div>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent'}}>8</div>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent'}}>9</div>
            <div style={{width:'20px',height:'7px',backgroundColor:'transparent'}}>10</div>
        </div>
        <div className='d-flex justify-content-between'>
            <div style={{width:'20px',height:'9px',backgroundColor:`#dcdcdc`,borderRadius:'4px'}}>
                <div style={{width:'100%',height:'100%',backgroundColor:'#9dc3ef',borderRadius:'4px'}}></div>
            </div>
            <div style={{width:'20px',height:'9px',backgroundColor:`#dcdcdc`,borderRadius:'4px'}}>
                <div style={{width:'40%',height:'100%',backgroundColor:'#9dc3ef',borderRadius:'4px'}}></div>
            </div>
            <div style={{width:'20px',height:'9px',backgroundColor:`#dcdcdc`,borderRadius:'4px'}}></div>
            <div style={{width:'20px',height:'9px',backgroundColor:`#dcdcdc`,borderRadius:'4px'}}></div>
            <div style={{width:'20px',height:'9px',backgroundColor:`#dcdcdc`,borderRadius:'4px'}}></div>
            <div style={{width:'20px',height:'9px',backgroundColor:`#dcdcdc`,borderRadius:'4px'}}></div>
            <div style={{width:'20px',height:'9px',backgroundColor:`#dcdcdc`,borderRadius:'4px'}}></div>
            <div style={{width:'20px',height:'9px',backgroundColor:`#dcdcdc`,borderRadius:'4px'}}></div>
            <div style={{width:'20px',height:'9px',backgroundColor:`#dcdcdc`,borderRadius:'4px'}}></div>
            <div style={{width:'20px',height:'9px',backgroundColor:`#dcdcdc`,borderRadius:'4px'}}></div>
        </div>
    </div>
  )
}

export default Precipitation;