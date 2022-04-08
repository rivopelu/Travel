import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'
const FooterComp = () => {
    return (
        <div className="FooterComp">
            <div className="content">
                <div className="kiri">
                    <h2>Foolow<span>Us</span></h2>
                    <ul>
                        <li><i className="bi bi-facebook"></i></li>
                        <li><i className="bi bi-instagram"></i></li>
                        <li><i className="bi bi-twitter"></i></li>
                        <li><i className="bi bi-linkedin"></i></li>
                        <li><i className="bi bi-youtube"></i></li>
                    </ul>
                </div>
                <div className="kanan">
                    <h2>Travel<span>Ui</span></h2>
                    <ul className='navList'>
                        <li><NavLink activeClassName='active' to='/'>Home</NavLink></li>
                        <li><NavLink activeClassName='active' to='/destionation'>Destination</NavLink></li>
                        <li><NavLink activeClassName='active' to='/about'>About</NavLink></li>
                        <li><NavLink activeClassName='active' to='/reservation'>Reservation</NavLink></li>
                        <li><NavLink activeClassName='active' to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="garis"></div>
            <div className="bawah">
                <p>© 2022 - Rivo Pelu</p>
            </div>
        </div>
    )
}

export default FooterComp