import React from 'react';
import img1 from "./israel/israel-1.jpg";
import img2 from "./israel/israel-2.jpg";
import img3 from "./israel/israel-3.jpg";
import img4 from "./israel/israel-4.jpg";
import img5 from "./israel/israel-5.jpg";
import img6 from "./israel/israel-6.jpg";
import img7 from "./israel/israel-7.jpg";
import img8 from "./israel/israel-8.jpg";
import img9 from "./israel/israel-9.jpg";
import img10 from "./israel/israel-10.jpg";
import img11 from "./israel/israel-11.jpg";
import img12 from "./israel/israel-12.jpg";
import img13 from "./israel/israel-13.jpg";

function Israel() {
    return (
        <div className="Israel">
            <p className="Title">Israel</p>
            <div className="Photo_Container">
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img1} alt="Jerusalem"></img>
                </div>
                <p className="Caption">Jerusalem</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img2} alt="Sunrise over the Ramon crater, Mitzpe Ramon"></img>
                </div>
                <p className="Caption">Sunrise over the Ramon crater, Mitzpe Ramon</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img3} alt="The Red Sea, Eilat"></img>
                </div>
                <p className="Caption">The Red Sea, Eilat</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img4} alt="The breathtaking Tsin Valley, The Tomb of David Ben-Gurion"></img>
                </div>
                <p className="Caption">The breathtaking Tsin Valley, The Tomb of David Ben-Gurion</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img5} alt="Overlooking the Mediterranean Sea, The Port of Jaffa"></img>
                </div>
                <p className="Caption">Overlooking the Mediterranean Sea, The Port of Jaffa</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img6} alt="A greek orthodox monastery, The Port of Jaffa"></img>
                </div>
                <p className="Caption">A greek orthodox monastery, The Port of Jaffa</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img7} alt="The artificial Timna Lake, Timna Park, Eilat"></img>
                </div>
                <p className="Caption">The artificial Timna Lake, Timna Park, Eilat</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img8} alt="King Solomon's Pillars, Timna Park, Eilat"></img>
                </div>
                <p className="Caption">King Solomon's Pillars, Timna Park, Eilat</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img9} alt="Tel Aviv Marina, Tel Aviv"></img>
                </div>
                <p className="Caption">Tel Aviv Marina, Tel Aviv</p>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img10} alt="Red Canyon, Eilat"></img>
                </div>
                <p className="Caption">Red Canyon, Eilat</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img11} alt="Old Tel Aviv Port Area and Shops, Tel Aviv"></img>
                </div>
                <p className="Caption">Old Tel Aviv Port Area and Shops, Tel Aviv</p>
                <div className="row justify-content-center">
                    <img className="col-md-9" src={img12} alt="Red Sea Valley"></img>
                </div>
                <p className="Caption">Red Sea Valley</p>
                <div className="row justify-content-center">
                    <img className="col-md-4" src={img13} alt="Star trails over the Ramon Crater, Mitzpe Ramon"></img>
                </div>
                <p className="Caption">Star trails over the Ramon Crater, Mitzpe Ramon</p>


            </div>    
        </div>
    )
}

export default Israel;