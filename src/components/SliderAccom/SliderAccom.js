import React, { Component } from "react";
import Slider from 'react-slick'
import './SliderAccom.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

export default class SliderAccom extends Component {
    render() {
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };

      return (
        <div className="slider-container">
          <Slider {...settings}>
          <div className="slider-item">
          <a href="#">
            <div className="slider-item-img">
              <img src={require("../../Assets/img/accom-sm-1.jpg")} alt="" />
            </div>
            <div className="desc">
              <p>double room</p>
            </div>
          </a>
        </div>
        <div className="slider-item">
          <a href="#">
            <div className="slider-item-img">
              <img src={require("../../Assets/img/accom-sm-2.jpg")} alt="" />
            </div>
            <div className="desc">
              <p>triple room</p>
              <span>3 bed</span>
            </div>
          </a>
        </div>
        <div className="slider-item">
          <a href="#">
            <div className="slider-item-img">
              <img src={require("../../Assets/img/accom-sm-3.jpg")} alt="" />
            </div>
            <div className="desc">
              <p>triple room</p>
              <span>2 bed</span>
            </div>
          </a>
        </div>
        <div className="slider-item">
          <a href="#">
            <div className="slider-item-img">
              <img src={require("../../Assets/img/accom-sm-4.jpg")} alt="" />
            </div>
            <div className="desc">
              <p>dorm room</p>
            </div>
          </a>
        </div>
        <div className="slider-item">
          <a href="#">
            <div className="slider-item-img">
              <img src={require("../../Assets/img/accom-sm-2.jpg")} alt="" />
            </div>
            <div className="desc">
              <p>triple room</p>
              <span>3 bed</span>
            </div>
          </a>
        </div>
          </Slider>
        </div>
      );
    }
  }