import React from 'react'
import './btn.scss'
const Btn = ({ title, ...rest }) => {
    return (
        <button className='mainBtn' {...rest}>{title}</button>
    )
}

export default Btn