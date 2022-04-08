import React from 'react'
import './mainhome.scss'
import gambar from './Asset.png'
const MainHome = () => {
    return (
        <div className="maincontent">
            <div className="container">

                <div className="conte">

                    <p className="hastag">#AllAboutTravel</p>
                    <h1 className="title">Comfort and facilities come first.</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed laoreet sem. Phasellus vehicula lectus nec lorem blandit luctus. Sed ullamcorper dui at ligula ullamcorper commodo. Quisque pharetra tellus sed venenatis fringilla. Mauris molestie orci ac suscipit
                    </p>

                    <div className="bawah">
                        <div className="content">

                            <h1>320<span>+</span></h1>
                            <p>resort</p>
                        </div>
                        <div className="garis"></div>
                        <div className="content">

                            <h1>120<span>+</span></h1>
                            <p>City</p>
                        </div>
                    </div>
                </div>
                <div className="gambar">

                    <img src={gambar} alt="" />
                </div>
            </div>

        </div>
    )
}

export default MainHome