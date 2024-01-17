import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { addOrder } from "../../JS/Actions/order";
import { getOneProduct } from "../../JS/Actions/product";
import "./AddOrder.css";
const AddOrder = () => {
  const match = useMatch("/addorder/:id");

  const productToGet = useSelector(
    (state) => state.productReducer.productToGet
  )
  useEffect(() => {
    dispatch(getOneProduct(match.params.id))
  })
  
  const [newOrder, setNewOrder] = useState({
    email: "",
    productname: "",
    reference:"",
    adresse: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  useEffect(() => {
    dispatch(getOneProduct(match.params.id));
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    newOrder.productname=`${productToGet.name}`
    newOrder.reference=`${productToGet.reference}`

    dispatch(addOrder(newOrder, match.params.id));
    navigate("/");
  };

  return (
    <div>
      <h1>
        <p className="normed">PASSER UNE COMMANDE</p>
      </h1>

      <div className="commande-container">
        <div className="orderCard">
          <img
            src={`/uploads/${productToGet.imageURL}`}
            width="30%"
            alt="product"
          />

          <p className="forms"> Produit : {productToGet.name} </p>
          <p className="forms"> ref : {productToGet.reference} </p>
          <p className="forms"> Prix : {productToGet.prix} DT </p>


          <div className="inputs">
            <div className="input-order">
              <p className="forms">E-mail :</p>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                value={newOrder.email}
              />
            </div>
            <div className="input-order">
              <p className="forms">Numéro de téléphone:</p>
              <Form.Control
                type="number"
                name="phone"
                onChange={handleChange}
                value={newOrder.phone}
              />
            </div>
            <div className="input-order">
              <p className="forms">Adresse:</p>
              <Form.Control
                type="text"
                name="adresse"
                onChange={handleChange}
                value={newOrder.adresse}
              />
            </div>

            <div className="btn66">
              <hr />
              <div
                class="button5"
                onClick={isAuth ? handleOrder : navigate("/login")}
              >
                Commander <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png" className="cart" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;