import React from 'react';
import img1 from "./homephoto/home-1.jpg";
import img2 from "./homephoto/home-2.jpg";
import img3 from "./homephoto/home-3.jpg";
import img4 from "./homephoto/home-4.jpg";
import img5 from "./homephoto/projects-cover.jpg";
import img6 from './homephoto/world-cover.jpg';
import img7 from './homephoto/about.jpg';

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
            </div>
            <p className="Caption">Please visit my work, or learn more about me.</p>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <a href="/projects"><img src={img5} alt="Project Cover" className="Project_Thumbnail" /></a>
                    <div className="Thumbnail_Title"><a href="/projects">Projects</a></div>
                </div>
                <div className="col-md-4">
                    <a href="/world"><img src={img6} alt="World Cover" className="Project_Thumbnail" /></a>
                    <div className="Thumbnail_Title"><a href="/world">World</a></div>
                </div>
                <div className="col-md-4">
                    <a href="/about"><img src={img7} alt="Maya" className="Project_Thumbnail" /></a>
                    <div className="Thumbnail_Title"><a href="/about">About Me</a></div>
                </div>
            </div>  
        </div>
    )
}

export default Home; 