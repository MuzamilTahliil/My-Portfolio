import React from "react";
import '../global.css'

function Banner() {
    return(
    <div className="Banner">
        <div className="Banner-text">
            <h1 >Hi, I'm Muzamil Tahliil,</h1>
            <h2>A web Developer</h2>
            <p>Transforming Your Digital Vision into Reality;  Innovative Web Design by a <br /> perfessional Web developer</p>
            <p>Transforming Your Digital Vision into Reality; <br /> Innovative Web Design by a perfessional Web developer</p>
            <button className="btn-banner">More About Me</button>
        </div>
        <div className="profile-section">
            <img className="profile-pic" src="Muzamil.jpg" alt="" />
            
        </div>

    </div>
    )
}
export default Banner