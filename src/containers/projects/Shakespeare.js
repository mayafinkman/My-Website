import React from 'react';
import img1 from './shakespeare/shakespeare-1.jpg';
import img2 from './shakespeare/shakespeare-2.jpg';
import img3 from './shakespeare/shakespeare-3.jpg';
import img4 from './shakespeare/shakespeare-4.jpg';
import img5 from './shakespeare/shakespeare-5.jpg';
import img6 from './shakespeare/shakespeare-6.jpg';

function Shakespeare() {
    return (
        <div className="Shakespeare">
            <p className="Title">Shakespeare in Shadows</p>
            <p className="Caption">This project is comprised of images depicting famous scenes from plays by William Shakespeare. Shakespeare's <br />
                                    plays are timeless pieces. For over five hundred years people have been praising and studying his work. In order to maintain the<br />
                                    everlasting effect of his plays, the images are composed so that the people and objects in it are either silhouetted or shadowed.</p>
            <div className="Photo_Container">
            <div className="row justify-content-center">
                    <img className="col-md-6" src={img1} alt="Hamlet holding the skull of Yorick, Hamlet"/>
            </div>
            <p className="Caption">Hamlet holding the skull of Yorick, Hamlet</p>
            <div className="row justify-content-center">
                <img className="col-md-6" src={img2} alt="Brutus stabbing Julius, Julius Caesar"/>
            </div>
                <p className="Caption">Brutus stabbing Julius, Julius Caesar</p>
            <div className="row justify-content-center">
                <img className="col-md-6" src={img3} alt="Bottom turing into a donkey, A Midsummer Night's Dream"/>
            </div>
                <p className="Caption">Bottom turing into a donkey, A Midsummer Night's Dream</p>    
            <div className="row justify-content-center">
                <img className="col-md-6" src={img4} alt="Othello strangling Desdemona, Othello"/>
            </div>
                <p className="Caption">Othello strangling Desdemona, Othello</p>    
            <div className="row justify-content-center">
                <img className="col-md-6" src={img5} alt="Hamlet meeting the ghost of his father, Hamlet"/>
            </div>
                <p className="Caption">Hamlet meeting the ghost of his father, Hamlet</p>    
            <div className="row justify-content-center">
                <img className="col-md-6" src={img6} alt="The balcony scene, Romeo and Juliet"/>
            </div>
                <p className="Caption">The balcony scene, Romeo and Juliet</p>
            </div>
        </div>
    )
}

export default Shakespeare;