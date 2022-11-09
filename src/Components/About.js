import React from "react";
import "../styles/About.css"
import about from '../img/about5.png'

export default function About(){

  return(
    <section className="about">
      <div className="container">
        <div className="about-info" id="about">
          

          <div data-aos="zoom-in" className="about-info__info">
            <div className="info-bg">
              <h1 className="about-tittle">About company</h1>
              <p className="about-info__txt">We specialize in every aspect of automobile industry. Commercial, private, classic etc. We sell new, used, imports, classics, atvs, motorcycles, boats. If you have any desire or question contact us and we will be there to help. We have a verity of vehicles. Financing available for qualified customers.</p>
            </div>
            
            
          </div>
        </div>

      </div>
    </section>
  )
}