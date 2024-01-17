import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../ContactUs/ContactUs";
import "./Home.css";
import Products from "../Products/Products";
import video from "./plk.mp4";

const Home = ({ filtredProducts }) => {
  const myRef = useRef(null);


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GameHaven</title>
        <link rel="canonical" />
      </Helmet>
      <h1>
        <p className="nostech1"> GameHaven SHOP</p>
      </h1>
      
          <div className="Banner">
          <video id="video" width={1262} autoPlay loop muted >
  <source src={video}  type="video/mp4"/> 
</video>

          </div>
    

      <div ref={myRef}>
        {<Products filtredProducts={filtredProducts} />}
        
      </div>

      <ContactUs />
    </div>
  );
};

export default Home;
