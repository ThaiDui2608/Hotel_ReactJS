import React from 'react'
import './Menu.css'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'

const Menu = () => {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MENU</title>
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
  <link rel="stylesheet" href="../../Css/layout/menu.css" />
  {/* Header */}
  <header>
    <div id="header" />
  </header>
  {/* Banner */}
  <section>
    <div className="banner">
      <div className="banner-img">
        <img src={require("../../Assets/img/banner-menu.png")} alt="" className="w-100" />
      </div>
      <div className="banner-title">
        <h1 className="banner-heading">MENU</h1>
      </div>
    </div>
  </section>
  {/* Menu */}
  <section>
    <div className="menu bg-white">
      <div className="container">
        <div className="menu-box">
          <div className="menu-list row"></div>
          <div className="pagination">
            <ul id="pagination-menu">
              <div class="col-md-6 col-lg-4 col-sm-12">
                <div class="menu-item">
                    <a href="#" class="menu-img">
                        <img src={require('../../Assets/img/menu-item1.png')} alt=""/>
                    </a>
                    <div class="menu-title">
                      <h3><a href="#">Lasagne al Forno</a></h3>
                    </div>
                </div>

              </div>
              <div class="col-md-6 col-lg-4 col-sm-12">
                <div class="menu-item">
                    <a href="#" class="menu-img">
                        <img src={require('../../Assets/img/menu-item2.png')} alt=""/>
                    </a>
                    <div class="menu-title">
                      <h3><a href="#">Lasagne al Forno</a></h3>
                    </div>
                </div>

              </div>
              <div class="col-md-6 col-lg-4 col-sm-12">
                <div class="menu-item">
                    <a href="#" class="menu-img">
                        <img src={require('../../Assets/img/menu-item3.png')} alt=""/>
                    </a>
                    <div class="menu-title">
                      <h3><a href="#">Lasagne al Forno</a></h3>
                    </div>
                </div>

              </div>
            </ul>
            <ul id="pagination-menu">
              <div class="col-md-6 col-lg-4 col-sm-12">
                <div class="menu-item">
                    <a href="#" class="menu-img">
                        <img src={require('../../Assets/img/menu-item5.png')} alt=""/>
                    </a>
                    <div class="menu-title">
                      <h3><a href="#">Lasagne al Forno</a></h3>
                    </div>
                </div>

              </div>
              <div class="col-md-6 col-lg-4 col-sm-12">
                <div class="menu-item">
                    <a href="#" class="menu-img">
                        <img src={require('../../Assets/img/menu-item6.png')} alt=""/>
                    </a>
                    <div class="menu-title">
                      <h3><a href="#">Lasagne al Forno</a></h3>
                    </div>
                </div>

              </div>
              <div class="col-md-6 col-lg-4 col-sm-12">
                <div class="menu-item">
                    <a href="#" class="menu-img">
                        <img src={require('../../Assets/img/menu-item1.png')} alt=""/>
                    </a>
                    <div class="menu-title">
                      <h3><a href="#">Lasagne al Forno</a></h3>
                    </div>
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

export default Menu