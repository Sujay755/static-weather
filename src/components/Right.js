import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import userImage from "../cityImage/user1.jpg";
import Chart from "./Chart";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Precipitation from "./Precipitation";
import UvIndex from "./UvIndex";
import FeelsLike from "./FeelsLike";
import ChanceOfRain from "./ChanceOfRain";

const Right = () => {
  return (
    <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <div className="mt-2 justify-content-between d-flex">
        <div className="text-start">
          <h6 className="fw-bold">Welcome back Aradhya!</h6>
          <h6>Checkout today's weather information</h6>
        </div>
        <div className="d-flex">
          <div className="d-flex mt-2 px-4">
            <FontAwesomeIcon
              style={{ width: "7px", marginTop: "7px" }}
              icon={faCircle}
            />
            <FontAwesomeIcon
              style={{
                width: "7px",
                marginTop: "7px",
                paddingLeft: "3px",
                paddingRight: "3px",
              }}
              icon={faCircle}
            />
            <FontAwesomeIcon
              style={{ width: "7px", marginTop: "7px" }}
              icon={faCircle}
            />
          </div>
          <img
            style={{ width: "50px", height: "50px", borderRadius: "15px" }}
            src={userImage}
            alt=""
          />
        </div>
      </div>
      <Chart />
      <h6 className="text-start m-2">More details of today's weather</h6>
      <div className="d-flex">
        <Humidity />
        <div
          className="rounded-5"
          style={{ width: "33%", marginLeft: "20px", backgroundColor: "white" }}
        >
          <div
            style={{
              width: "40%",
              rotate: "-90deg",
              marginLeft: "70px",
              marginBottom: "-60px",
              marginTop: "40px",
            }}
          >
            <Wind />
            <h6
              className="fw-bold"
              style={{ marginTop: "-70px", rotate: "90deg" }}
            >
              10km/h
            </h6>
          </div>
        </div>
        <Precipitation />
      </div>
      <div className="d-flex">
        <UvIndex/>
        <FeelsLike/>
        <ChanceOfRain/>
      </div>
    </div>
  );
};

export default Right;
