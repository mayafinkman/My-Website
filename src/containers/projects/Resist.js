import React from 'react';
import img1 from './resist/RESIST-1.jpg';
import img2 from './resist/RESIST-2.jpg';
import img3 from './resist/RESIST-3.jpg';
import img4 from './resist/RESIST-4.jpg';
import img5 from './resist/RESIST-5.jpg';
import img6 from './resist/RESIST-6.jpg';
import img7 from './resist/RESIST-7.jpg';
import img8 from './resist/RESIST-8.jpg';
import img9 from './resist/RESIST-9.jpg';
import img10 from './resist/RESIST-10.jpg';
import img11 from './resist/RESIST-11.jpg';
import img12 from './resist/RESIST-12.jpg';

function Resist() {
    return (
        <div className="Resist">
            <p className="Title">Resist</p>
            <p className="Caption">Women's March NYC, January 20 2018 <br/>
                                    March For Our Lives, March 24 2018 <br/>
                                    Rally Against Kavanaugh, October 6 2018</p>
            <div className="Photo_Container">
                <div className="row justify-content-center">
                    <img className="col-md-9 Photo_Padding" src={img1} alt="Two people holding a sign that says No Justice, No Peace."/>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-5 Photo_Padding" src={img2} alt="A woman holding a sign that says Abortion on demand and without apology"/>
                    <img className="col-md-5 Photo_Padding" src={img3} alt="A woman holding a sign that says The NRA puts all lives at risk"/>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-9 Photo_Padding" src={img4} alt="A person speaking to a crowd"/>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-9 Photo_Padding" src={img5} alt="Kids marching for gun control"/>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-5 Photo_Padding" src={img6} alt="A man holding one side of a sign." />
                    <img className="col-md-5 Photo_Padding" src={img7} alt="A man holding the other side of a sign with his fist in the air."/>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-9 Photo_Padding" src={img8} alt="A person holding a sign that says school doesn't mix with guns."/>
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-5 Photo_Padding" src={img9} alt="A person holding a sign that says wrong side of herstory." />
                    <img className="col-md-5 Photo_Padding" src={img10} alt="A person holding a sign that says toxic masculinity kills." />
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-9 Photo_Padding" src={img11} alt="A crowd listening to a speaker." />
                </div>
                <div className="row justify-content-center">
                    <img className="col-md-9 Photo_Padding" src={img12} alt="The march going past Trump hotel."/>
                </div>
            </div>    
        </div>
    )
}

export default Resist;