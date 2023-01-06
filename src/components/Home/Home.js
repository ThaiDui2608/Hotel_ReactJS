import React from 'react'
import { Link } from 'react-router-dom'
import SimpleSlider from '../Slider/Slider'
import { hover } from '@testing-library/user-event/dist/hover'
import './Home.css'
import SliderReview from '../SliderReview/SliderReview'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'

const inrtoItemTitle_H3_Link = {
  margin: "0",
  fontFamily: 'UTM-Hanzel',
  fontSize: "22px",
  textAlign: "center",
  color: "#D7B659",
}

const readMoreLink = {
  fontWeight: "bold",
  color: "#000",
  fontSize: "14px",
  position: "relative",
  textTransform: "uppercase",
  hover: {
    transition: ".3s",
    color: "#fff",
  }
}

const Home = () => {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HOME</title>
  {/* Bootstrap */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossOrigin="anonymous"
  />
  {/* Jquery slider */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
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
  {/* Css */}
  <link rel="stylesheet" href="../../Css/common/common.css" />
  <link rel="stylesheet" href="../../Css/layout/index.css" />
  {/* Header */}
  <header>
    <div id="header" />
  </header>
  {/* Banner */}
  <section>
  <SimpleSlider/>
  </section>
  {/* Introduce */}
  <section>
    <div className="introduce bg-sena">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-sm-12">
            <div className="intro-content">
              <h2 className="intro-title">
                Welcome to <br />
                <b className="text-uppercase">cozynibi hotel</b>
              </h2>
              <p className="intro-text">
                Thing lesser replenish evening called void a sea blessed meat
                fourth called moveth place behold night own night third in
                they’re abundant and don’t you’re the upon fruit. Divided open
                divided appear also saw may fill. whales seed creepeth. Open
                lessegether he also morning land i saw.
              </p>
              <Link className='read-more' to={'#'} style={readMoreLink}>Read more</Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-9">
            <div className="list-intro row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="intro-item">
                  <img
                    src={require("../../Assets/img/intro-1.jpg")}
                    alt=""
                    className="intro-image"
                  />
                  <div className="intro-item-title text-uppercase">
                    <h3>
                      <Link style={inrtoItemTitle_H3_Link}>Double room</Link>
                    </h3>
                  </div>
                  <a href='#' className='intro-bgImage'>
                    <img
                        src={require("../../Assets/icon/inrtro-k.png")}
                        alt="#"
                        className="w-100"
                      />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="intro-item">
                  <img
                    src={require("../../Assets/img/intro-2.jpg")}
                    alt=""
                    className="intro-image"
                  />
                  <div className="intro-item-title text-uppercase">
                    <h3>
                      <Link to={'#'} style={inrtoItemTitle_H3_Link}>Double room</Link>
                    </h3>
                  </div>
                  <a href='#' className='intro-bgImage'>
                    <img
                        src={require("../../Assets/icon/inrtro-k.png")}
                        alt="#"
                        className="w-100"
                      />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="intro-item">
                  <img
                    src={require("../../Assets/img/intro-3.jpg")}
                    alt=""
                    className="intro-image"
                  />
                  <div className="intro-item-title text-uppercase">
                    <h3>
                      <Link to={'#'} style={inrtoItemTitle_H3_Link}>Double room</Link>
                    </h3>
                  </div>
                  <a href='#' className='intro-bgImage'>
                    <img
                        src={require("../../Assets/icon/inrtro-k.png")}
                        alt="#"
                        className="w-100"
                      />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Travel */}
  <section>
    <div className="travel">
      <div className="container">
        <h2 className="title-heading">Tour travel</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="travel-item d-flex">
              <a href="#" className="travel-img">
                <img src={require("../../Assets/img/travel-1.jpg")} alt="" />
              </a>
              <div className="travel-content">
                <h3>
                  <a href="#">
                    Bich Dong Pahoga Mua Cave - Phat Diem Cathedral
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="travel-item d-flex">
              <a href="#" className="travel-img">
                <img src={require("../../Assets/img/travel-2.jpg")} alt="" />
              </a>
              <div className="travel-content">
                <h3>
                  <a href="#">
                    Bich Dong Pahoga Mua Cave - Phat Diem Cathedral
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="travel-item d-flex">
              <a href="#" className="travel-img">
                <img src={require("../../Assets/img/travel-3.jpg")} alt="" />
              </a>
              <div className="travel-content">
                <h3>
                  <a href="#">
                    Bich Dong Pahoga Mua Cave - Phat Diem Cathedral
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="travel-item d-flex">
              <a href="#" className="travel-img">
                <img src={require("../../Assets/img/travel-4.jpg")} alt="" />
              </a>
              <div className="travel-content">
                <h3>
                  <a href="#">
                    Bich Dong Pahoga Mua Cave - Phat Diem Cathedral
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="travel-item d-flex">
              <a href="#" className="travel-img">
                <img src={require("../../Assets/img/travel-5.jpg")} alt="" />
              </a>
              <div className="travel-content">
                <h3>
                  <a href="#">
                    Bich Dong Pahoga Mua Cave - Phat Diem Cathedral
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="travel-item d-flex">
              <a href="#" className="travel-img">
                <img src={require("../../Assets/img/travel-6.jpg")} alt="" />
              </a>
              <div className="travel-content">
                <h3>
                  <a href="#">
                    Bich Dong Pahoga Mua Cave - Phat Diem Cathedral
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Food Restaurant and services */}
  <section>
    <div className="frs-service bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="food">
              <h2 className="frs-title">food restaurant</h2>
              <div className="food-res">
                <div className="food-border">
                  <span />
                </div>
                <div className="food-slide">
                  <div className="foodSlide-wrapper">
                    <div className="foodSlide-item">
                      <a href="#" className="food-img">
                        <img
                          src={require("../../Assets/img/food-res.jpg")}
                          alt=""
                          className="w-100"
                        />
                      </a>
                      <div className="foodSlide-title">
                        <h3>
                          <a href="#">Lasagne al Forno</a>
                        </h3>
                      </div>
                    </div>
                    <div className="foodSlide-item">
                      <a href="#" className="food-img">
                        <img
                          src="../../Assets/img/food-res.jpg"
                          alt=""
                          className="w-100"
                        />
                      </a>
                      <div className="foodSlide-title">
                        <h3>
                          <a href="#">Lasagne al Forno</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="services">
              <h2 className="frs-title">services</h2>
              <div className="service-content row">
                <div className="service-item col-md-12 col-lg-6 col-sm-12">
                  <a href="#" className="service-icon">
                    <img src={require("../../Assets/icon/ser-1.png")} alt="" />
                  </a>
                  <div className="service-title">
                    <h3>
                      <a href="#">Massage &amp; Sauna</a>
                    </h3>
                  </div>
                </div>
                <div className="service-item col-md-12 col-lg-6 col-sm-12">
                  <a href="#" className="service-icon">
                    <img src={require("../../Assets/icon/ser-2.png")} alt="" />
                  </a>
                  <div className="service-title">
                    <h3>
                      <a href="#">Charles bar</a>
                    </h3>
                  </div>
                </div>
                <div className="service-item col-md-12 col-lg-6 col-sm-12">
                  <a href="#" className="service-icon">
                    <img src={require("../../Assets/icon/ser-3.png")} alt="" />
                  </a>
                  <div className="service-title">
                    <h3>
                      <a href="#">Wedding</a>
                    </h3>
                  </div>
                </div>
                <div className="service-item col-md-12 col-lg-6 col-sm-12">
                  <a href="#" className="service-icon">
                    <img src={require("../../Assets/icon/ser-4.png")} alt="" />
                  </a>
                  <div className="service-title">
                    <h3>
                      <a href="#">Meetings &amp; events</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* News highlights */}
  <section>
    <div className="news">
      <div className="container">
        <h2 className="title-heading">News highlights</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="news-item">
              <a href="#" className="news-img">
                <img
                  src={require("../../Assets/img/news-1.jpg")}
                  alt=""
                  className="w-100"
                />
              </a>
            </div>
            <h3>
              <a href="#">
                World Tourism Day 2019: Tourism and Jobs - A better Future for
                All
              </a>
            </h3>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="news-item">
              <a href="#" className="news-img">
                <img
                  src={require("../../Assets/img/news-2.jpg")}
                  alt=""
                  className="w-100"
                />
              </a>
            </div>
            <h3>
              <a href="#">Vietnam featured in Louis Vuitton advertisement</a>
            </h3>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="news-item">
              <a href="#" className="news-img">
                <img
                  src={require("../../Assets/img/news-3.jpg")}
                  alt=""
                  className="w-100"
                />
              </a>
            </div>
            <h3>
              <a href="#">
                Foodwise: Cuon dap Da Nang and its Ha Noi brother are must-try
                dishes
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* What other say */}
  <section>
    <div className="other bg-white">
      <div className="container">
        <div className="other-slider">
          {/* <div className="other-item">
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
          </div> */}
          <SliderReview/>
        </div>
      </div>
    </div>
  </section>
  {/* Hotline */}
  <div className="fix-hotline">
    <a href="#">
      <img src={require("../../Assets/icon/hotline-fix.png")} alt="" />
    </a>
  </div>
  {/* Back to top */}
  <ScrollToTopButton/>
  {/* Footer */}
  <footer>
    <div id="footer" />
  </footer>
  {/* Script */}

    </div>
  )
}

export default Home