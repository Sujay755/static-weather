import React, {useState } from "react";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faCircle, faLocationArrow, faSun, faMoon, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faSun as sun } from "@fortawesome/free-regular-svg-icons";


const Left = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div style={{paddingLeft:'15px', paddingRight:'15px'}}>
      <div className="d-flex justify-content-between">
      <div className="d-flex">
        <button className="bg-transparent border-0">
          <h4><FontAwesomeIcon className="text-white" icon={faSquarePlus} /></h4>
        </button>
      </div>
      <div className="d-flex">
      <div style={{width:'20px',height:'7px',backgroundColor:'white',borderRadius:'5px',marginTop:'11px'}}></div>
      <FontAwesomeIcon style={{width:'7px', marginTop:'7px', paddingLeft:'3px', paddingRight:'3px', color:'#9dc3ef'}} icon={faCircle} />
      <FontAwesomeIcon style={{width:'7px', marginTop:'7px', color:'#9dc3ef'}} icon={faCircle} />
      </div>
      <div className="d-flex mt-1">
        <div>
          <h6 className="text-white" style={{ marginRight: "4px" }}>
            <span>&#176;</span>C
          </h6>
        </div>
        <div>
          <Switch
            onChange={handleChange}
            checked={checked}
            offColor="#dcdcdc"
            onColor="gray"
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={15}
            height={10}
            width={30}
          />
        </div>
        <div>
          <h6 className="text-white">
            <span>&#176;</span>F
          </h6>
        </div>
      </div>
    </div>
    <div className="mt-4 justify-content-between d-flex">
      <h6><FontAwesomeIcon className="text-white opacity-75" icon={faLocationArrow}/><span className="text-white opacity-75 fw-normal"> Bangalore, India</span></h6>
      <h6><FontAwesomeIcon className="text-white opacity-75" icon={faSun}/><span className="text-white opacity-75 fw-normal"> 6:35</span></h6>
    </div>
    <div className="justify-content-between d-flex">
      <h6 className="text-white opacity-75 fw-normal" style={{fontSize:'0.9rem', paddingLeft:'18px'}}>Today 3 Mar</h6>
      <h6><FontAwesomeIcon className="text-white opacity-75" style={{paddingRight:'3px'}} icon={faMoon}/><span className="text-white opacity-75 fw-normal"> 6:28</span></h6>
    </div>
    <div className="mt-2 justify-content-between d-flex">
      <h5 className="mt-5"><FontAwesomeIcon className="text-white opacity-75" icon={faChevronLeft}/></h5>
      <h1 className="mt-1 text-white display-1" style={{paddingLeft:'20px'}}>28<span>&#176;</span></h1>
      <h5 className="mt-5"><FontAwesomeIcon className="text-white opacity-75" icon={faChevronRight}/></h5>
    </div>
    <div className="justify-content-center d-flex">
      <FontAwesomeIcon className="text-white" style={{width:'11px', padding:'6px'}} icon={sun}/>
      <h5 className="text-white fw-normal opacity-75">Sunny</h5>
    </div>
    </div>
  );
};

export default Left;
