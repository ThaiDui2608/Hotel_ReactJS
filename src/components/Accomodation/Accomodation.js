import React from 'react'
import './Accomodation.css'
import SliderAccom from '../SliderAccom/SliderAccom'
import { Link } from 'react-router-dom'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'

const bigItemTextContent = {
  textTransform: "uppercase",
  display: "inline-block",
  fontWeight: "bold",
  fontSize: "28px",
  lineHeight: "24px",
  position: "relative",
  background: '../../Assets/img/bg-read-m.png',
  backgroundSize: "100% auto",
  backgroundPosition: "bottom",
  color: '#000',
  textDecoration: 'none'
}

const readMore = {
  textTransform: "uppercase",
  display: "inline-block",
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "24px",
  position: "relative",
  background: '../../Assets/img/bg-read-m.png',
  backgroundSize: "100% auto",
  backgroundPosition: "bottom",
  color: '#000',
  textDecoration: 'none'
}


const Accomodation = () => {
  return (
    <div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Accommodation</title>
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap&subset=vietnamese"
    rel="stylesheet"
  />
  {/* Fontawesome */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  {/* Bootstrap */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossOrigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
    integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
    integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="../../Css/common/common.css" />
  <link rel="stylesheet" href="../../Css/layout/accommodation.css" />
  {/* Header */}
  <header>
    <div id="header" />
  </header>
  <div className="banner">
    <div className="banner-title">
      <div className="avt">
        <img src={require("../../Assets/img/banner-about-us.jpg")} alt="" />
      </div>
      <div className="desc">
        <h1>
          <span>accommodation</span>
        </h1>
        <img src={require("../../Assets/img/bg-tit.png")} alt="" />
      </div>
    </div>
    <div className="top-connect">
      <img src={require("../../Assets/img/bg-frs.png")} alt="" />
    </div>
  </div>
  <div className="container">
    <div className="slider-box">
      <div className="big-item">
        <div className="big-item-content">
          <div className="big-item-img">
            <img src={require("../../Assets/img/accom-slide-1.jpg")} alt="" />
          </div>
          <div className="big-item-text">
            <div className="big-item-text-content">
              <h3>
                <Link to={'#'} style={bigItemTextContent}>double room</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam soluta repudiandae iusto suscipit explicabo voluptatem
                odit ratione sint, non ullam, distinctio veniam. Et ex vel aut
                dicta? Corporis, nam quo?
              </p>
              <div className="read-more">
                <Link to={'#'} style={readMore}>read more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SliderAccom/>
    </div>
  </div>
  {/* Hotline */}
  <div className="fix-hotline">
    <a href="#">
      <img src={require("../../Assets/icon/hotline-fix.png")} alt="" />
    </a>
  </div>
  {/* Back to top */}
  <ScrollToTopButton/>
  {/* FOOTER */}
  <footer>
    <div id="footer" />
  </footer>
  {/*  */}

    </div>
  )
}

export default Accomodation