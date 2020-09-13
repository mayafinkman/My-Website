import React from 'react';
import img1 from './msm/msm-1.jpg';
import img2 from './msm/msm-2.jpg';
import img3 from './msm/msm-3.jpg';
import img4 from './msm/msm-4.jpg';
import img5 from './msm/msm-5.jpg';
import img6 from './msm/msm-6.jpg';
import img7 from './msm/msm-7.jpg';
import img8 from './msm/msm-8.jpg';
import img9 from './msm/msm-9.jpg';
import img10 from './msm/msm-10.jpg';
import img11 from './msm/msm-11.jpg';

function MSM() {
    return (
        <div className="msm">
            <div className="Photo_Container">
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-9" src={img1} alt="Mont St Michel"></img>
                </div>
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-9" src={img2} alt="Mont St Michel"></img>
                </div>
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-4" src={img3} alt="Mont St Michel"></img>
                    <img className="col-md-4" src={img4} alt="Mont St Michel"></img>
                </div>
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-9" src={img5} alt="Mont St Michel"></img>
                </div>
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-9" src={img6} alt="Mont St Michel"></img>
                </div>
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-4" src={img7} alt="Mont St Michel"></img>
                    <img className="col-md-4" src={img8} alt="Mont St Michel"></img>
                </div>
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-9" src={img9} alt="Mont St Michel"></img>
                </div>
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-4" src={img10} alt="Mont St Michel"></img>
                </div>
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-9" src={img11} alt="Mont St Michel"></img>
                </div>
            </div>
        </div>
    )
}

export default MSM;