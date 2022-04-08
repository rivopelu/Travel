import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Btn } from '../../atoms'
import './cardHome.scss'
const CardHome = () => {

    const [daerah, setDaerah] = useState([]);
    useEffect(() => {
        getDaerah()
    }, []);

    const getDaerah = async () => {
        const response = await axios.get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
        setDaerah(response.data.provinsi);
    }

    return (
        <div className="card-home">
            <div className="card">

                <div className="content">
                    <i className="bi bi-geo-alt-fill"></i>
                    <h2>Destination</h2>
                    <select className='input-content' name="cars" id="cars">

                        {
                            daerah.map((hasil) => (
                                <option key={hasil.id} value={hasil.nama}>{hasil.nama}</option>

                            ))
                        }

                    </select>
                </div>
                <div className="content">
                    <i className="bi bi-calendar3-week-fill"></i>
                    <h2>Date</h2>
                    <input type="date" className='input-content' />
                </div>
                <div className="content">
                    <i className="bi bi-collection-fill"></i>
                    <h2>Room</h2>
                    <select className='input-content' name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div >

                    <Btn title={'Check Room'} />
                </div>
            </div>
        </div>
    )
}

export default CardHome