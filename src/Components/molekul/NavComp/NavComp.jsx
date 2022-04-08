import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'

const NavComp = () => {


    //change nav color sctrool
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'NavComponent scroll-nav' : 'NavComponent '}>
            <div className="brand">

                <NavLink to='/'><h1>Travel<span>Ui</span></h1></NavLink>
            </div>
            <div className="kanan">
                <ul className='navList'>
                    <li><NavLink activeClassName='active' to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName='active' to='/destionation'>Destination</NavLink></li>
                    <li><NavLink activeClassName='active' to='/about'>About</NavLink></li>
                    <li><NavLink activeClassName='active' to='/reservation'>Reservation</NavLink></li>
                    <li><NavLink activeClassName='active' to='/contact'>Contact</NavLink></li>
                </ul>
                <ul className="auth">
                    <li><NavLink to='/register'>Register</NavLink></li>
                    <li><NavLink to='/login' className='login'>Login</NavLink></li>
                </ul>
            </div>

        </div >
    )
}

export default NavComp