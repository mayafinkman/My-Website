import React from 'react';


function Header() {
    return (
        <div className="Header_Wrapper"> 
            <div className="Header_Nav">
                <div className="SiteLogo">
                    <a href="/">Maya Finkman</a>
                </div>
            <div className="Header_Links">  
                <div className="item">
                    <a href='/people'>People</a>
                </div>    
                <div className="item">
                    <a href='/places'>Places</a>
                </div>
                <div className="item">
                    <a href='/behind-the-scenes'>Behind the Scenes</a>
                </div>
                <div className="item">
                    <a href='/about'>About</a>
                </div>    
            </div>     
                    {/* <a href="/about">About</a> */}
            </div>
        </div>

    )

}

export default Header;



