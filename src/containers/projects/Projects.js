import React from 'react';
import bts from './thumbnails/bts-cover.jpg';
import colors from './thumbnails/colors-cover.jpg';
import resist from './thumbnails/resist-cover.jpg';
import portraits from './thumbnails/portraits-cover.jpg';
import shakespeare from './thumbnails/shakespeare-cover.jpg';

function Projects() {
    return (
        <div className="Projects">
            <div className="row justify-content-center">
                <div class="col-md-5">
                    <a href="/resist"><img src={resist} alt="Resist Cover" className="Project_Thumbnail" /> </a>
                    <div className="Thumbnail_Title"><a href="/resist">Resist</a></div>
                </div>
                <div class="col-md-5">
                    <a href="/behind-the-scenes"><img src={bts} alt="Behind the Scenes Cover" className="Project_Thumbnail" /></a>
                    <div className="Thumbnail_Title"><a href="/behind-the-scenes">Behind the Scenes</a></div>
                </div>
            </div>  
            <div className="row justify-content-center">
                <div class="col-md-5">
                    <a href="/portraits"><img src={portraits} alt="Portraits Cover" className="Project_Thumbnail" /></a>
                    <div className="Thumbnail_Title"><a href="/behind-the-scenes" >Portraits</a></div>
                </div>
                <div class="col-md-5">
                    <a href="/colors"><img src={colors} alt="Colors Cover" className="Project_Thumbnail" /> </a>
                    <div className="Thumbnail_Title"><a href="/resist" >Colors</a></div>
                </div>
                
            </div>
            <div className="row justify-content-center">
                <div class="col-md-5">
                    <a href="/resist"><img src={shakespeare} alt="Shakespeare Cover" className="Project_Thumbnail" /> </a>
                    <div className="Thumbnail_Title"><a href="/resist">Shakespeare in Shadows</a></div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects;