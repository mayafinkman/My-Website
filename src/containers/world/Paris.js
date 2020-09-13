import React from 'react';
import img1 from "./paris/paris-1.jpg";
import img2 from "./paris/paris-2.jpg";
import img3 from "./paris/paris-3.jpg";
import img4 from "./paris/paris-4.jpg";
import img5 from "./paris/paris-5.jpg";
import img6 from "./paris/paris-6.jpg";
import img7 from "./paris/paris-7.jpg";
import img8 from "./paris/paris-8.jpg";
import img9 from "./paris/paris-9.jpg";
import img10 from "./paris/paris-10.jpg";

function Paris() {
    return (
        <div className="Paris">
            <p className="Title">Paris La Nuit</p>
            <div className="Photo_Container">
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img1} alt="A mirrored circle in a courtyard of the Louvre"></img>
                </div>
                <p className="Caption">A mirrored circle in a courtyard of the Louvre</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img2} alt="Pont Neuf from Pont des Arts"></img>
                </div>
                <p className="Caption">Pont Neuf from Pont des Arts</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img3} alt="The Louvre"></img>
                </div>
                <p className="Caption">The Louvre</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img4} alt="Headlights at the Point de l'Alma tunnel"></img>
                </div>
                <p className="Caption">Headlights at the Point de l'Alma tunnel</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img5} alt="The Louvre"></img>
                </div>
                <p className="Caption">The Louvre</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img6} alt="The Musée d'Orsay from the Pont Royal"></img>
                </div>
                <p className="Caption">The Musée d'Orsay from the Pont Royal</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img7} alt="Pont Alexandre III, Alexander the Third Bridge"></img>
                </div>
                <p className="Caption">Pont Alexandre III, Alexander the Third Bridge</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img8} alt="The Louvre"></img>
                </div>
                <p className="Caption">The Louvre</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img9} alt="Pont des Arts"></img>
                </div>
                <p className="Caption">Pont des Arts</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img10} alt="The Seine"></img>
                </div>
                <p className="Caption">The Seine</p>

            </div>    
        </div>
    )
}

export default Paris;