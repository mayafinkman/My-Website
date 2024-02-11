import React from 'react';
import img1 from './homephoto/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <div className="About">
            <div className="col-md-6">
                    <p className="About_Text">Maya Finkman is a portrait, lifestyle and stills photographer based in New York City.</p>
                    <p className="About_Text">Maya is is a recent graduate of NYU’s Tandon School of Engineering where she studied Integrated Digital Media, with a focus on UX design and photography. She has been studying photography for a decade, having taken classes at the International Center of Photography, the School of Visual Arts, and then later classes at NYU.</p>
                    <p className="About_Text">While at NYU, she was chief photographer and later co-head of Marketing at Views From NYU, a late-night and sketch comedy show. She also taught photography to high school students for three years at the School of Creative and Performing Arts in Burlington, VT.</p>
                    <p className="About_Text">Please contact at <a href = "mailto: mayafinkman1@gmail.com">mayafinkman@gmail.com</a></p>
            </div>
            <div className="col-md-4">
                    <img className="About_Image" src={img1}/>
                </div>
        </div>
    )
}

export default About;