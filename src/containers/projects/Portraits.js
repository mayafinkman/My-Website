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


function Portraits() {
    return (
        <div className="Portraits">
            <p className="Title">People</p>
            <div className="Photo_Container">
                <div className="row justify-content-center">
                    
                    <div className='col-md-4'>
                     <img className="col-md" src={img7} alt="" />
                     <img className="col-md" src={img2} alt="" />
                     <img className="col-md" src={img4} alt="" />
                    </div>

                    <div className='col-md-4'>
                     <img className="col-md" src={img9} alt="" />
                     <img className="col-md" src={img6} alt="" />
                     <img className="col-md" src={img1} alt="" />
                    </div>

                    <div className='col-md-4'>
                     <img className="col-md" src={img8} alt="" />
                     <img className="col-md" src={img3} alt="" />
                     <img className="col-md" src={img5} alt="" />
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Portraits;
