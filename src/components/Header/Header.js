import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import styled from "./Header.css"

const linkStyle = {
  marginRight: "20px",
  fontSize: "14px",
  padding: "12px",
  fontWeight: "bold",
  textDecoration: "none",
  color: "#181200"
}

const Header = () => {
  return (
    <div>
  <div className="header">
    <div className="header-logo">
      <img src={require('../../Assets/img/logo.png')} alt="" />
    </div>
    <div className="header-nav">
      <div className="nav-top">
        <div className="search-box">
          <input type="text" className="search" placeholder="Search" />
          <button className="search-btn" />
        </div>
        <div className="language">
          <select name="language" id="lang-list">
            <option value="VN">Việt Nam</option>
            <option value="US">English</option>
          </select>
        </div>
        <div className="btn-book">
          <Link to={'/'} style={linkStyle}>BOOK A ROOM</Link>
        </div>
      </div>
      <div className="nav-bottom">
        <ul className="nav-menu d-flex flex-wrap justify-content-end">
          <li>
            <Link to={'/'} style={linkStyle}>HOME</Link>
          </li>
          <li>
            <Link to={'/about-us'} style={linkStyle}>ABOUT US</Link>
          </li>
          <li>
            <Link to={'/accomodation'} style={linkStyle}>ACCOMMODATION</Link>
          </li>
          <li>
            <Link to={'/menu'} style={linkStyle}>MENU</Link>
          </li>
          <li>
            <Link to={'#'} style={linkStyle}>TOUR TRAVEL</Link>
          </li>
          <li>
            <Link to={'#'} style={linkStyle}>SERVICE</Link>
          </li>
          <li>
            <Link to={'/news'} style={linkStyle}>NEWS</Link>
          </li>
          <li>
            <Link to={'/gallery'} style={linkStyle}>GALLERY</Link>
          </li>
          <li>
            <Link to={'/contact'} style={linkStyle}>CONTACT</Link>
          </li>
        </ul>
      </div>
      <button className="nav-btn">
        <i className="fa-solid fa-bars" />
      </button>
      <div className="nav-sm">
        <ul className="nav-menu">
          <li>
            <a href="../layout/index.html">HOME</a>
          </li>
          <li>
            <a href="../layout/about.html">ABOUT US</a>
          </li>
          <li>
            <a href="../layout/accommodation.html">ACCOMMODATION</a>
          </li>
          <li>
            <a href="../layout/menu.html">MENU</a>
          </li>
          <li>
            <a href="#">TOUR TRAVEL</a>
          </li>
          <li>
            <a href="#">SERVICE</a>
          </li>
          <li>
            <a href="../layout/news.html">NEWS</a>
          </li>
          <li>
            <a href="../layout/gallery.html">GALLERY</a>
          </li>
          <li>
            <a href="../layout/contact.html">CONTACT</a>
          </li>
        </ul>
        <div className="form-lang">
          <label htmlFor="language">Language</label>
          <br />
          <select name="language" className="lang-res">
            <option value="VN">Việt Nam</option>
            <option value="US">English</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <button className="book-res">
    <a href="#">
      <i className="fa-solid fa-credit-card" />
    </a>
  </button>
    </div>
  )
}

export default Header