import React from 'react';
import la from './thumbnails/la-cover.jpg';
import israel from './thumbnails/israel-cover.jpg';
import paris from './thumbnails/paris-cover.jpg';
import msm from './thumbnails/msm-cover.jpg';

function World() {
    return (
        <div className="World">
            <div className="row justify-content-center">
                <div class="col-md-5">
                    <a href="/israel"><img src={israel} alt="Israel Cover" className="Project_Thumbnail" /></a>
                    <div className="Thumbnail_Title"><a href="/israel" >Israel</a></div>
                </div>
                <div class="col-md-5">
                    <a href="/los-angeles"><img src={la} alt="La Cover" className="Project_Thumbnail" /></a>
                    <div className="Thumbnail_Title"><a href="/los-angeles">Los Angeles</a></div>
                </div>
            </div>  
            <div className="row justify-content-center">
                <div class="col-md-5">
                    <a href="/paris"><img src={paris} alt="Paris Cover" className="Project_Thumbnail" /> </a>
                    <div className="Thumbnail_Title"><a href="/paris">Paris La Nuit</a></div>
                </div>
                <div class="col-md-5">
                    <a href="/mont-st-michel"><img src={msm} alt="Mont St Michel Cover" className="Project_Thumbnail" /> </a>
                    <div className="Thumbnail_Title"><a href="/mont-st-michel" >Mont St Michel</a></div>
                </div>
                
            </div>
            
        </div>
    )
}

export default World;