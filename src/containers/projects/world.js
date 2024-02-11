import React from 'react';
import img1 from './places/Places-1.jpg';
import img2 from './places/Places-2.jpg';
import img3 from './places/Places-3.jpg';
import img4 from './places/Places-4.jpg';
import img5 from './places/Places-5.jpg';
import img6 from './places/Places-6.jpg';
import img7 from './places/Places-7.jpg';
import img8 from './places/Places-8.jpg';
import img9 from './places/Places-9.jpg';
import img10 from './places/Places-10.jpg';
import img11 from './places/Places-11.jpg';
import img12 from './places/Places-12.jpg';
import img13 from './places/Places-13.jpg';
import img14 from './places/Places-14.jpg';

function Places() {
    return (
        <div className="World">
            <p className="Title">Places</p>
            <div className="Photo_Container">
                <div className="row justify-content-center">
                    
                    <div className='col-md-4'>
                        <img className="col-md" src={img1} alt="" />
                        <img className="col-md" src={img2} alt="" />
                        <img className="col-md" src={img3} alt="" />
                        <img className="col-md" src={img4} alt="" />
                    </div>

                    <div className='col-md-4'>
                        <img className="col-md" src={img5} alt="" />
                        <img className="col-md" src={img6} alt="" />
                        <img className="col-md" src={img7} alt="" />
                        <img className="col-md" src={img8} alt="" />
                        <img className="col-md" src={img9} alt="" />
                    </div>

                    <div className='col-md-4'>
                        <img className="col-md" src={img10} alt="" />
                        <img className="col-md" src={img11} alt="" />
                        <img className="col-md" src={img12} alt="" />
                        <img className="col-md" src={img13} alt="" />
                        <img className="col-md" src={img14} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Places;