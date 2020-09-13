import React from 'react';
import img1 from './colors/STAFF_COLOR1.jpg'
import img2 from './colors/STAFF_COLOR2.jpg'
import img3 from './colors/STAFF_COLOR3.jpg'
import img4 from './colors/STAFF_COLOR4.jpg'
import img5 from './colors/STAFF_COLOR-5.jpg'
import img6 from './colors/STAFF_COLOR-6.jpg'
import img7 from './colors/STAFF_COLOR-7.jpg'
import img8 from './colors/STAFF_COLOR-8.jpg'
import img9 from './colors/STAFF_COLOR-9.jpg'
import img10 from './colors/STAFF_COLOR-10.jpg'
import img11 from './colors/STAFF_COLOR-11.jpg'
function Colors() {
    return (
        <div className="Colors">
            <p className="Title">COLORS</p>
            <div className="Photo_Container">
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img1} alt="Callie with her hands on her head"></img>
                    <img className="col-md-4" src={img2} alt="Callie looking at the camera"></img>
                    <img className= "col-md-4" src={img3} alt="Callie looking confused"></img>
                </div>
                <p className="Caption">Callie</p>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img4} alt="Sully"/>
                </div>
                <p className="Caption">Sully</p>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img5} alt="Luke"/>
                </div>
                <p className="Caption">Luke</p>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img6} alt="Maegan"/>
                </div>
                <p className="Caption">Maegan</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img7} alt="Maegan and Luke"/>
                </div>
                <p className="Caption">Maegan and Luke</p>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img8} alt="Sully" />
                    <img className="col-md-4" src={img9} alt="Sully"/>
                </div>
                <p className="Caption">Sully</p>
                <div className="row justify-content-center">
                    <img className="col-md-3" src={img10} alt="Maegan, Sully and Luke" />
                    <img className="col-md-7" src={img11} alt="Maegan, Sully and Luke"/>
                </div>
                <p className="Caption">Maegan, Sully and Luke</p>
            </div>
        </div>
    )
}

export default Colors;