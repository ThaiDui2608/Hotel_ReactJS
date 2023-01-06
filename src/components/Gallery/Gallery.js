import React from 'react'
import './Gallery.css'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'

const Gallery = () => {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GALLERY</title>
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
  {/* Css */}
  <link rel="stylesheet" href="../../Css/common/common.css" />
  <link rel="stylesheet" href="../../Css/layout/gallery.css" />
  {/* Header */}
  <header>
    <div id="header" />
  </header>
  {/* Banner */}
  <section>
    <div className="banner">
      <div className="banner-img">
        <img
          src={require("../../Assets/img/banner-gallery.png")}
          alt=""
          className="w-100"
        />
      </div>
      <div className="banner-title">
        <h1 className="banner-heading">Gallery</h1>
      </div>
    </div>
  </section>
  {/* Gallery */}
  <section>
    <div className="gallery bg-white">
      <div className="container">
        <div className="gallery-box">
          <div className="gallery-list row"></div>
          <div className="pagination">
            <ul id="pagination-gallery">
            <div class="col-md-4 col-lg-3 col-sm-6">
              <div class="gallery-item">
                  <a href="#" class="gallery-img">
                    <img src={require("../../Assets/img/gallery-item.jpg")} alt=""/>
                  </a>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6">
              <div class="gallery-item">
                  <a href="#" class="gallery-img">
                    <img src={require("../../Assets/img/gallery-item2.png")} alt=""/>
                  </a>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6">
              <div class="gallery-item">
                  <a href="#" class="gallery-img">
                    <img src={require("../../Assets/img/gallery-item3.png")} alt=""/>
                  </a>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6">
              <div class="gallery-item">
                  <a href="#" class="gallery-img">
                    <img src={require("../../Assets/img/gallery-item4.png")} alt=""/>
                  </a>
              </div>
            </div>
            </ul>
            <ul id="pagination-gallery">
            <div class="col-md-4 col-lg-3 col-sm-6">
              <div class="gallery-item">
                  <a href="#" class="gallery-img">
                    <img src={require("../../Assets/img/gallery-item5.png")} alt=""/>
                  </a>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6">
              <div class="gallery-item">
                  <a href="#" class="gallery-img">
                    <img src={require("../../Assets/img/gallery-item6.png")} alt=""/>
                  </a>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6">
              <div class="gallery-item">
                  <a href="#" class="gallery-img">
                    <img src={require("../../Assets/img/gallery-item7.png")} alt=""/>
                  </a>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6">
              <div class="gallery-item">
                  <a href="#" class="gallery-img">
                    <img src={require("../../Assets/img/gallery-item8.png")} alt=""/>
                  </a>
              </div>
            </div>
            </ul>
          </div>
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

export default Gallery