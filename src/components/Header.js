import React from 'react';


function Header() {
    return (
        <div className="Header_Wrapper">  
            <nav className="Header_Nav">
                <div className="SiteLogo">
                    <a href="/">MAYA FINKMAN PHOTOGRAPHY</a>
                </div>  
                <div className="item">
                    <div className="Dropdown">
                        <a href="/projects" >Projects</a>
                        <div className="Dropdown_Content">
                            <a href="/resist">Resist</a>
                            <a href="/behind-the-scenes">Behind the Scenes</a>
                            <a href="/portraits">Portraits</a>
                            <a href="/colors">Colors</a>
                            <a href="/shakespeare-in-shadows">Shakespeare in Shadows</a>
                        </div>
                    </div>
                </div>    
                <div className="item">
                     <div className="Dropdown">
                    <a href="/world">World</a>
                    <div className="Dropdown_Content">
                        <a href="/israel">Israel</a>
                        <a href="/los-angeles">Los Angeles</a>
                        <a href="/paris">Paris</a>
                        <a href="/mont-st-michel">Mont St Michel</a>
                        </div>
                    </div>
                </div>
                    <a href="/about">About</a>
                </nav>
        </div>

    )

}

export default Header;



