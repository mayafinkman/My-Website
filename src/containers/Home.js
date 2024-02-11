import React from 'react';
import img1 from "./homephoto/home-1.jpg";
import img2 from "./homephoto/home-2.jpg";
import img3 from "./homephoto/home-3.jpg";
import img4 from "./homephoto/home-4.jpg";
import places from "./homephoto/places-cover.jpg";
import people from './homephoto/portraits-cover.jpg';
import bts from "./homephoto/bts-cover.jpg";

function Home() {
    return (
        <div className="Home">
            <div className="Photo_Container">
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-12" src={img2} alt="Austria"></img>
                </div>
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-12" src={img4} alt="Normandy"></img>
                </div> 
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-12" src={img3} alt="Freedom Tower, NYC"></img>
                </div>
                <div className="row justify-content-center Photo_Padding">
                    <img className="col-md-12" src={img1} alt="Eilat"></img>
                </div>   
                <p className='Caption'>Please visit my work:</p>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <a href="/projects"><img src={people} alt="People project cover image" className="Project_Thumbnail" /></a>
                        <div className="Thumbnail_Title"><a href="/projects">People</a></div>
                    </div>
                    <div className="col-md-4">
                        <a href="/world"><img src={places} alt="Places project cover image" className="Project_Thumbnail" /></a>
                        <div className="Thumbnail_Title"><a href="/world">Places</a></div>
                    </div>
                    <div className="col-md-4">
                        <a href="/world"><img src={bts} alt="Behind the scenes project cover image" className="Project_Thumbnail" /></a>
                        <div className="Thumbnail_Title"><a href="/world">Behind the Scenes</a></div>
                    </div>
                </div>  
            </div>
            
        </div>
    )
}

export default Home; 