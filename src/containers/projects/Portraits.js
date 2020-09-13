import React from 'react';
import img1 from './portraits/Portraits-1.jpg';
import img2 from './portraits/Portraits-2.jpg';
import img3 from './portraits/Portraits-3.jpg';
import img4 from './portraits/Portraits-4.jpg';
import img5 from './portraits/Portraits-5.jpg';
import img6 from './portraits/Portraits-6.jpg';
import img7 from './portraits/Portraits-7.jpg';
import img8 from './portraits/Portraits-8.jpg';
import img9 from './portraits/Portraits-9.jpg';
import img10 from './portraits/Portraits-10.jpg';
import img11 from './portraits/Portraits-11.jpg';

function Portraits() {
    return (
        <div className="Portraits">
            <p className="Title">Portraits</p>
            <div className="Photo_Container">
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img1} alt="" />
                    <img className="col-md-4" src={img2} alt=""/>
                </div>
                <div className="row justify-content-center">
                    <p className="Caption col-md-4">Agatha</p>
                    <p className="Caption col-md-4">Ethan</p>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-3" src={img3} alt="" />
                    <img className="col-md-6" src={img4} alt=""/>
                </div>
                <div className="row justify-content-center">
                    <p className="Caption col-md-3">John</p>
                    <p className="Caption col-md-6">Coco</p>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img5} alt="" />
                </div>
                <p className="Caption">Kai</p>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img6} alt="" />
                </div>
                <p className="Caption">Woman in NYC</p>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img7} alt="" />
                </div>
                <p className="Caption">Eli</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img8} alt="" />
                </div>
                <p className="Caption">Guy</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img9} alt="" />
                </div>
                <p className="Caption">Maegan</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img10} alt="" />
                </div>
                <p className="Caption">Mika</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img11} alt="" />
                </div>
                <p className="Caption">Hannah</p>
                
            </div>
        </div>
    )
}

export default Portraits;
