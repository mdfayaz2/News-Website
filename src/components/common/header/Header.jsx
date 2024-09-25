import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
            <li>
                <Link to='/culture' className='live-tv'> <span class="blinking-dot"></span> LIVE TV </Link>
                
              </li>
              <li>
                <Link to='/'>తాజా వార్తలు</Link>
              </li>
              <li>
                <Link to='/'>నేషనల్</Link>
              </li>
              <li>
                <Link to='/politics'>ఇంటర్నేషనల్</Link>
              </li>
              <li>
                <Link to='/memes'>రాజకీయాలు</Link>
              </li>
              <li>
                <Link to='/sports'>క్రైం</Link>
              </li>
              <li>
                <Link to='/boxed'>సినిమా</Link>
              </li>
              <li>
                <Link to='/reviews'>లైఫ్ స్టైల్</Link>
              </li>
              <li>
                <Link to='/reviews'>ట్రెండింగ్</Link>
              </li>
              <li>
                <Link to='/reviews'>బిజినెస్</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
