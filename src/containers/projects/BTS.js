import React from 'react';
import img1 from './bts/BTS_FINALS-1.jpg';
import img2 from './bts/BTS_FINALS-2.jpg';
import img3 from './bts/BTS_FINALS-3.jpg';
import img4 from './bts/BTS_FINALS-4.jpg';
import img5 from './bts/BTS_FINALS-5.jpg';
import img6 from './bts/BTS_FINALS-6.jpg';
import img7 from './bts/BTS_FINALS-7.jpg';
import img8 from './bts/BTS_FINALS-8.jpg';
import img9 from './bts/BTS_FINALS-9.jpg';

function BTS() {
    return (
        <div className="BTS">
            <p className="Title">Behind the Scenes</p>
            <p className="Caption">Behind the scenes photographs on various student film sets.</p>
            <div className="Photo_Container container-fluid">
                <div className="row justify-content-center">
                    <img className="col-md-4 Photo_Padding" src={img1} alt=""></img>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-9 Photo_Padding" src={img2} alt=""></img>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-4 Photo_Padding" src={img3} alt=""></img>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-9 Photo_Padding" src={img4} alt=""></img>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-4 Photo_Padding" src={img5} alt=""></img>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-9 Photo_Padding" src={img6} alt=""></img>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-4 Photo_Padding" src={img7} alt=""></img>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-9 Photo_Padding" src={img8} alt=""></img>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-4 Photo_Padding" src={img9} alt=""></img>
                </div>
            </div>
        </div> 
    )
}

export default BTS;