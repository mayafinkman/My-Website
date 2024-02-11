import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookOpen, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

function Footer() {
    return (
        <div className="Footer">
            <div className='Footer_Content'>
                <div className="Footer_Text">
                    <p>Copyright <FontAwesomeIcon icon={faCopyright}/> Maya Finkman 2024</p>

                </div>
                <div className="Footer_Links">
                    <a href="https://www.linkedin.com/in/maya-finkman/" alt="Maya's LinkedIn Profile"><FontAwesomeIcon icon={faLinkedin} className="Icon_Style"/></a>
                    <a href="https://www.mayafinkman.com" alt="Maya's Product Design Portfolio"><FontAwesomeIcon icon={faBookOpen} className="Icon_Style" /></a>
                    <a href = "mailto: mayafinkman1@gmail.com" alt="Send Maya an email"><FontAwesomeIcon icon={faEnvelope} className="Icon_Style"/></a>    
            
                </div> 
            </div>    
        </div>
    )
}
export default Footer;