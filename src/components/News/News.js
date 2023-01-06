import React from 'react'
import './News.css'
import { Link } from 'react-router-dom'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'

const itemContentContainerLink = {
  margin: "0 0 15px",
  fontSize: "18px",
  lineHeight: "28px",
  color: "#000",
  textTransform: "uppercase",
  fontWeight: "bolder",
  transition: "0.3s"
}

const readMoreLink = {
  fontSize: "15px",
  lineHeight: "24px",
  fontWeight: "bold",
  marginTop: "20px",
  marginBottom: "10px",
  color: '#000'
}

const News = () => {
  return (
    <div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>News</title>
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap&subset=vietnamese"
    rel="stylesheet"
  />
  {/* Bootstrap */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossOrigin="anonymous"
  />
  {/* Fontawesome */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="../../Css/common/common.css" />
  <link rel="stylesheet" href="../../Css/layout/news.css" />
  {/* Header */}
  <header>
    <div id="header" />
  </header>
  {/* BANNER */}
  <div className="banner">
    <div className="banner-title">
      <div className="avt">
        <img src={require("../../Assets/img/banner-news.png")} alt="" />
      </div>
      <div className="desc">
        <h1>
          <span>news</span>
        </h1>
        <img src={require("../../Assets/img/bg-tit.png")} alt="" />
      </div>
    </div>
    <div className="top-connect">
      <img src={require("../../Assets/img/bg-abu.png")} alt="" />
    </div>
    <div className="top-connect">
      <img src={require("../../Assets/img/bg-frs.png")} alt="" />
    </div>
  </div>
  {/* CONTENT */}
  <div className="page-news">
    <div className="container">
      <div className="news-box">
        <div className="item">
          <div className="item-border" />
          <div className="item-img">
            <img src={require("../../Assets/img/news-item.jpg")} alt="" />
          </div>
          <div className="item-content">
            <div className="item-content-container">
              <h3>
                <Link to={'#'} style={itemContentContainerLink}>LASAGNE AL FORNO</Link>
              </h3>
              <p>
                Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.
                Lorem ipsum dolor. Mauris fermentum dictum magna. Sed laoreet
                aliquam leo. Ut tellus dolor, dapibus eget,
              </p>
              <div className="read-more">
                <Link to={'#'} style={readMoreLink}>Read more</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-border" />
          <div className="item-content">
            <div className="item-content-container">
              <h3>
                <Link to={'#'} style={itemContentContainerLink}>LASAGNE AL FORNO</Link>
              </h3>
              <p>
                Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.
                Lorem ipsum dolor. Mauris fermentum dictum magna. Sed laoreet
                aliquam leo. Ut tellus dolor, dapibus eget,
              </p>
              <div className="read-more">
                <Link to={'#'} style={readMoreLink}>Read more</Link>
              </div>
            </div>
          </div>
          <div className="item-img">
            <img src={require("../../Assets/img/news-item2.png")} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="item-border" />
          <div className="item-img">
            <img src={require("../../Assets/img/news-item3.png")} alt="" />
          </div>
          <div className="item-content">
            <div className="item-content-container">
              <h3>
                <Link to={'#'} style={itemContentContainerLink}>LASAGNE AL FORNO</Link>
              </h3>
              <p>
                Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.
                Lorem ipsum dolor. Mauris fermentum dictum magna. Sed laoreet
                aliquam leo. Ut tellus dolor, dapibus eget,
              </p>
              <div className="read-more">
                <Link to={'#'} style={readMoreLink}>Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination" />
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
    </div>
  )
}

export default News