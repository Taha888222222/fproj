import React from "react";
import "./ContactUs.css";




const ContactUs = () => {
  return (
    <div>
      <h1 className="normed">CONTACTEZ NOUS</h1>
      <div className="contain" style={{ width: "35rem" }}>
        <a
          target="_blank"
          href="https://www.facebook.com/"
          rel="noreferrer"
        >
          <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXkOx1If1rCH0Gz0J3LVBM2CvwJKNQXSmZg&usqp=CAU" alt="img" />
        <p>tahakhamssi</p></a>
        <a href="tel:+21628087472">
          <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDuzegNzHuibwf2tKUaKIXu1Geh6X-kQOzDw&usqp=CAU" alt="icon" />
         <p>+21628087472</p></a>
        <a
          target="_blank"
          href="mailto:tahakhamassi@gmail.com"
          rel="noreferrer"
        >
          <img className="icon" src="https://f.hellowork.com/blogdumoderateur/2012/12/gmail-240x240.png" alt="img" />
          <p>tahakhamassi@gmail.com</p></a>
      </div>
      <h1 className="normed">RENDEZ NOUS VISITE</h1>
      <div>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/GOMYCODE+Menzah+5/@36.8468867,10.1682541,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd359f19cff1a1:0x71a7d4d04a5b1ef2!8m2!3d36.8468867!4d10.1704428!16s%2Fg%2F11qy9xm8kr"
          rel="noreferrer"
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqioD4eNReYsv1O6KzVds50O5zlJnsGHmGow&usqp=CAU" className="icon2" alt="img" />
        </a>
      </div>

      <div></div>
    </div>
  );
};

export default ContactUs;