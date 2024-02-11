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
import img10 from './bts/BTS_FINALS-10.jpg';
import img11 from './bts/BTS_FINALS-11.jpg';
import img12 from './bts/BTS_FINALS-12.jpg';

function BTS() {
    return (
        <div className="BTS">
            <p className="Title">Behind the Scenes</p>
            <p className="Caption">Behind the scenes photographs on various student film sets.</p>
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
                    </div>

                    <div className='col-md-4'>
                        <img className="col-md" src={img9} alt="" />
                        <img className="col-md" src={img10} alt="" />
                        <img className="col-md" src={img11} alt="" />
                        <img className="col-md" src={img12} alt="" />
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default BTS;