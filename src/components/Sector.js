import React from 'react'
import './Sector.css'

function Sector() {
    return (
        <>
            <div className="sector-container">
                <div className="sector-title">
                    <h1>Our Sectors</h1>
                </div>
                 <div className="sector-cards">
            <div className="card">
                <div className="card-img">
                    <img src="/images/img-1.jpg" alt="img"/>
                </div>
                <div className="card-p">
                    <p>Commercial</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsum.</p>
                    <p><a href="#">Lorem, ipsum dolor.</a></p>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src="/images/img-2.jpg" alt="img"/>
                </div>
                <div className="card-p">
                    <p>Resedential</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsum.</p>
                    <p><a href="#"> Lorem, ipsum dolor.</a></p>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src="/images/img-3.jpg" alt="img"/>
                </div>
                <div className="card-p">
                    <p>Interfaces</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsum.</p>
                    <p><a href="#">Lorem, ipsum dolor.</a></p>
                </div>
            </div>
        </div>
                <div className="sector-footer">
                    <p>Goodbye</p>
                </div>
           </div>   
        </>
    )
}

export default Sector
