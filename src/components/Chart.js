import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSun as sun, } from "@fortawesome/free-regular-svg-icons";
import ChartInside from "./ChartInside";

const Chart = () => {
  return (
    <div className="bg-white rounded-5" style={{paddingBottom:'10px'}}>
        <div className="d-flex justify-content-between mt-4 px-4 py-2">
      <h6>Upcoming hours</h6>
      <div className="d-flex">
        <select className="border-0 rounded-2 fw-semibold mt-2" style={{fontSize:'0.8rem',backgroundColor:'#f1f1f1',height:'20px'}} disabled>
          <option value="#">Rain precipitation</option>
          <option value="#">Humidity</option>
          <option value="#">Wind</option>
          <option value="#">Temperatue</option>
        </select>
        <h6 className="fw-normal rounded-2 fw-bold mt-2 mx-3" style={{backgroundColor:'#f1f1f1',width:"90px",height:'20px',fontSize:'0.8rem'}}>Next days <FontAwesomeIcon icon={faChevronRight}/></h6>
      </div>
    </div>
    <div className="d-flex justify-content-between" style={{width:'93%',marginLeft:'30px'}}>
    <div>
        <h6 style={{width:'0.1rem'}}>Now</h6>
        <FontAwesomeIcon style={{width:'0.5rem',paddingLeft:'5px'}} icon={sun}/>
        <h6 style={{width:'0.5rem'}}>27<span style={{width:'0.5rem'}}>&#176;</span></h6>
    </div>
    <div>
        <h6 style={{width:'0.1rem'}}>10:00</h6>
        <FontAwesomeIcon style={{width:'0.5rem',paddingLeft:'5px'}} icon={sun}/>
        <h6 style={{width:'0.5rem'}}>28<span style={{width:'0.5rem'}}>&#176;</span></h6>
    </div>
    <div>
        <h6 style={{width:'0.1rem'}}>11:00</h6>
        <FontAwesomeIcon style={{width:'0.5rem',paddingLeft:'5px'}} icon={faCloud}/>
        <h6 style={{width:'0.5rem'}}>29<span style={{width:'0.5rem'}}>&#176;</span></h6>
    </div>
    <div>
        <h6 style={{width:'0.1rem'}}>12:00</h6>
        <FontAwesomeIcon style={{width:'0.5rem',paddingLeft:'5px'}} icon={sun}/>
        <h6 style={{width:'0.5rem'}}>30<span style={{width:'0.5rem'}}>&#176;</span></h6>
    </div>
    <div>
        <h6 style={{width:'0.1rem'}}>13:00</h6>
        <FontAwesomeIcon style={{width:'0.5rem',paddingLeft:'5px'}} icon={sun}/>
        <h6 style={{width:'0.5rem'}}>32<span style={{width:'0.5rem'}}>&#176;</span></h6>
    </div>
    <div>
        <h6 style={{width:'0.1rem'}}>15:00</h6>
        <FontAwesomeIcon style={{width:'0.5rem',paddingLeft:'5px'}} icon={faCloud}/>
        <h6 style={{width:'0.5rem'}}>32<span style={{width:'0.5rem'}}>&#176;</span></h6>
    </div>
    <div>
        <h6 style={{width:'0.1rem'}}>16:00</h6>
        <FontAwesomeIcon style={{width:'0.5rem',paddingLeft:'5px'}} icon={sun}/>
        <h6 style={{width:'0.5rem'}}>31<span style={{width:'0.5rem'}}>&#176;</span></h6>
    </div>
    <div>
        <h6 style={{width:'0.1rem'}}>17:00</h6>
        <FontAwesomeIcon style={{width:'0.5rem',paddingLeft:'5px'}} icon={sun}/>
        <h6 style={{width:'0.5rem'}}>29<span style={{width:'0.5rem'}}>&#176;</span></h6>
    </div>
    </div>
    <ChartInside/>
    </div>
  );
};

export default Chart;
