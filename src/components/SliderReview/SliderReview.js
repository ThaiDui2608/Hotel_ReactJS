import React, { Component } from "react";
import Slider from 'react-slick'
import './SliderReview.css'

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

export default class SliderReview extends Component {
    render() {
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300,
      };

      return (
        <div className="slider-container">
          <Slider {...settings}>
          <div className="other-item">
            <p>
              was looking for a nice hotel, but with various activities when
              staying there. Boy, was I surprised! Cozynibi Hotel was anything
              but boring and all the things I did and places I visited was well
              worth it!
            </p>
            <div className="other-user d-flex">
              <div className="user-img">
                <img src={require("../../Assets/img/avt-1.jpg")} alt="" />
              </div>
              <div className="user-content">
                <b>John abraham</b>
                <p>From Germany</p>
              </div>
            </div>
          </div>
          <div className="other-item">
            <p>
              was looking for a nice hotel, but with various activities when
              staying there. Boy, was I surprised! Cozynibi Hotel was anything
              but boring and all the things I did and places I visited was well
              worth it!
            </p>
            <div className="other-user d-flex">
              <div className="user-img">
                <img src={require("../../Assets/img/avt-2.jpg")} alt="" />
              </div>
              <div className="user-content">
                <b>John abraham</b>
                <p>From Germany</p>
              </div>
            </div>
          </div>
          <div className="other-item">
            <p>
              was looking for a nice hotel, but with various activities when
              staying there. Boy, was I surprised! Cozynibi Hotel was anything
              but boring and all the things I did and places I visited was well
              worth it!
            </p>
            <div className="other-user d-flex">
              <div className="user-img">
                <img src={require("../../Assets/img/avt-1.jpg")} alt="" />
              </div>
              <div className="user-content">
                <b>John abraham</b>
                <p>From Germany</p>
              </div>
            </div>
          </div>
          <div className="other-item">
            <p>
              was looking for a nice hotel, but with various activities when
              staying there. Boy, was I surprised! Cozynibi Hotel was anything
              but boring and all the things I did and places I visited was well
              worth it!
            </p>
            <div className="other-user d-flex">
              <div className="user-img">
                <img src={require("../../Assets/img/avt-2.jpg")} alt="" />
              </div>
              <div className="user-content">
                <b>John abraham</b>
                <p>From Germany</p>
              </div>
            </div>
          </div>
          </Slider>
        </div>
      );
    }
  }