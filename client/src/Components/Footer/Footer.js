import React from "react";
import './Footer.css'

import { Link } from "react-router-dom"; 
import { Button, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";


const Footer = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <footer>
      <div className="Info">
        <div>
          <img src="https://thumbs.dreamstime.com/b/livraison-%C3%A0-domicile-logo-icon-design-125309453.jpg" className="Image" alt="livraison" />{" "}
          <p className="text">
            Livraison sur le grand tunis 
          </p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/2464/2464281.png" className="Image1" alt="Service client" />{" "}
          <p className="text">
            Service client 
          </p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/8654/8654341.png" className="c" alt="c" />
          <p className="c-text">
          repair et maintenance <br></br>
          </p>
        </div>
      </div>

      {isAuth || isAuthAdmin ? null : (
        <div className="mainfooter2">
          <div className="contain5">
            <p className="txt7">
              Inscrivez-vous pour recevoir les codes promos
            </p>
            <div className="form7">
              <FormControl placeholder="Votre adresse e-mail" />
            </div>
            <div>
              <Button className="v33" variant="light" href="/accountCreate">
                {" "}
                <span className="v3">Inscription</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      

      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <p>Informations</p>
              <div className="flex">
                <Link to="/Aproposdenous" className="path">
                  {" "}
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Information_icon.svg/2048px-Information_icon.svg.png" className="ico" alt="img" /> À propos de nous
                </Link>
                <br />
                <Link to="/Produits" className="path">
                  <img src="https://www.omspos.com/wordpress/wp-content/uploads/2016/08/icone-produit.png" className="ico" alt="img" />
                  Nos Produits
                </Link>
                <br />
                <a
                  target="_blank"
                  href="https://www.facebook.com"
                  className="path"
                  rel="noreferrer"
                >
                  <img src="https://cdn3.vectorstock.com/i/1000x1000/24/37/facebook-icon-vector-21082437.jpg" className="ico" alt="img" />
             facebook.com/tahakhma
                </a>
              </div>
            </div>

            {/* Column3 */}
            <div className="col">
              <p>Nous contacter</p>

              <a href="tel:+216-28087472" className="path">
                <img src="https://static.vecteezy.com/system/resources/previews/003/720/498/original/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg" className="ico" alt="img" />
                Tél : (+216) 28 59 07 
              </a>
              <a href="mailto: tahakhamassi@gmail.com" className="path">
                <p>
                  <img src="https://cdn.icon-icons.com/icons2/1011/PNG/512/Gmail_icon-icons.com_75706.png" className="ico" alt="img" /> Mail:
                  tahakhamassi@gmail.com
                </p>
              </a>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/GOMYCODE+Menzah+5/@36.8579652,10.1566185,12.83z/data=!4m6!3m5!1s0x12fd359f19cff1a1:0x71a7d4d04a5b1ef2!8m2!3d36.8468867!4d10.1704428!16s%2Fg%2F11qy9xm8kr"
                className="path"
                rel="noreferrer"
              >
                <p>
                  <img src="https://images.template.net/101999/address-location-clipart-hf4az.jpg" className="ico" alt="img" />
                  GOMYCODE Menzah 5 {" "}
                </p>
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} GameHaven | play best games HD |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
