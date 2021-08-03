import React from 'react';
import img1 from './homephoto/about-me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <div className="About">
            <div className="row justify-content-center">
                <img className="col-md-3" src={img1} alt="Maya"></img>
                <div className="col-md-4">
                    <p className="About_Title">Welcome to my photography page!</p>
                    <p className="About_Text">I am a User Experience Designer who has been pursuing a passion for photography for over six years. I take images with digital and film, using a Canon 70d and an Olympus OM10. I have studied at the International Center of Photography, School of Visual Arts and NYU Tisch.</p>
                    <p className="About_Text">B.S. in Integrated Digital Media from NYU Tandon School of Engineering.</p>
                    {/* LINKS FOR CONTACT MOVED TO FOOTER
                     <div className="row justify-content-center">
                        <div className="col-md-3">
                            <a href="https://www.linkedin.com/in/maya-finkman/"><FontAwesomeIcon icon={faUser} className="Icon_Style"/></a> 
                            <a href="https://www.linkedin.com/in/maya-finkman/" className="Caption">LinkedIn</a>
                        </div>
                        <div className="col-md-4">
                        <a href="https://www.linkedin.com/in/maya-finkman/"><FontAwesomeIcon icon={faBookOpen} className="Icon_Style"/></a>
                            <a href="https://www.mayafinkman.com/" className="Caption">Design Porfolio</a>
                        </div>
                        <div className="col-md-4">
                        <a href = "mailto: mayafinkman1@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="Icon_Style"/></a>
                            <a href="mailto: mayafinkman1@gmail.com" className="Caption">Email</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default About;