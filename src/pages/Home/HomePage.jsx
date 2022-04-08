import React from 'react'
import { Btn, CardHome } from '../../Components'
import './home.scss'
import MainHome from './mainContent/MainHome'

const HomePage = () => {

    return (
        <div className="HomePage" >
            <div className="cover">
                <div className="gradient">

                    <div className="text-home">
                        <h1>Travel More Conveniently with UI Travel</h1>
                        <Btn title={'explore'} />
                    </div>
                </div>
            </div>
            <CardHome />
            <MainHome />
        </div>
    )
}

export default HomePage