import React from 'react';
import img1 from './la/LA-1.jpg';
import img2 from './la/LA-2.jpg';
import img3 from './la/LA-3.jpg';
import img4 from './la/LA-4.jpg';
import img5 from './la/LA-5.jpg';
import img6 from './la/LA-6.jpg';
import img7 from './la/LA-7.jpg';
import img8 from './la/LA-8.jpg';
import img9 from './la/LA-9.jpg';
import img10 from './la/LA-10.jpg';

function LA() {
    return (
        <div className="LosAngeles">
            <p className="Title">Los Angeles</p>
            <div className="Photo_Container">
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img1} alt="Griffith Park"></img>
                </div>
                <p className="Caption">Griffith Park</p>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img2} alt="Los Angeles Skyscrapers"></img>
                </div>
                <p className="Caption">Los Angeles Skyscrapers</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img3} alt="OUE Skyspace"></img>
                </div>
                <p className="Caption">OUE Skyspace</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img4} alt="Greystone Mansion"></img>
                </div>
                <p className="Caption">Greystone Mansion</p>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img5} alt="OUE Skyspace "></img>
                </div>
                <p className="Caption">OUE Skyspace </p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img6} alt="Yayoi Kusama's Infinity Mirrored Room, The Broad"></img>
                </div>
                <p className="Caption">Yayoi Kusama's Infinity Mirrored Room, The Broad</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img7} alt="The Broad"></img>
                </div>
                <p className="Caption">The Broad</p>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img8} alt="Tony Oursler, Dust, The Broad"></img>
                </div>
                <p className="Caption">Tony Oursler, Dust, The Broad</p>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img9} alt="The Broad"></img>
                </div>
                <p className="Caption">The Broad</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img10} alt="The Walt Disney Concert Hall through the Broad"></img>
                </div>
                <p className="Caption">The Walt Disney Concert Hall through the Broad</p>
            </div>
        </div>
    )
}

export default LA;