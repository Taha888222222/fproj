import React from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../ContactUs/ContactUs";
import "./AboutUs.css";


const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>À PROPOS</title>
        <link rel="canonical" />
      </Helmet>
      <h1 className="About">À PROPOS DE NOUS</h1>

      <div className="descriptionNormed2">
        <div className="descriptionNormed">
          <p className="textdescription">
           
            <span className="descrNostech">GameHaven</span> 
          </p>
          
          <p className="textdescription">

          <span className="destxt"> It's an e-commerce website </span> 
          specializing in selling Game 
          Plongez dans l'univers envoûtant du jeu vidéo avec notre 
           Console de Jeu Next-Gen, l'ultime joyau pour les passionnés de gaming. 
           Redéfinissez vos attentes et explorez des mondes virtuels époustouflants grâce à cette console 
           révolutionnaire.
           Offrez-vous l'expérience de jeu ultime avec la Console de Jeu GameHaven de GDUi. Préparez-vous à repousser les frontières du possible. Commandez la vôtre dès maintenant !
          </p>
        </div>
      </div>
      <ContactUs/>
    </div>
  );
};

export default AboutUs;