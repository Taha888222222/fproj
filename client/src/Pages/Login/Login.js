import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Helmet } from "react-helmet";
import { login } from "../../JS/Actions/user";
import { loginAdmin } from "../../JS/Actions/admin";

const Login = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user)) && dispatch(loginAdmin(admin));
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>CONNEXION CLIENT</title>
        <link rel="canonical" />
      </Helmet>

      <h1 className="Login">CONNEXION CLIENT</h1>
      {isAuth ? (
        navigate("/")
      ) : isAuthAdmin ? (
        navigate("/")
      ) : (
        <div className="cadre2">
          <div className="cadre">
            <Form onSubmit={handleUser}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="forms">Adresse e-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  Nous ne partagerons jamais votre e-mail avec quelqu'un
                  d'autre.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="forms"> Mot de passe</Form.Label>
                <div>
                  {passwordShown ? (
                    <img
                     src="https://w7.pngwing.com/pngs/292/817/png-transparent-eye-computer-icon-vector-focus-concept-looking-at-view-optometry-eyeball-symbol-human-eye-ideas.png"
                      onClick={togglePassword}
                      className="eye"
                      alt="show"
                    />
                  ) : (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRC6TEljFtYLEC7oAUiyrbrRC_tW2T5admeQ&usqp=CAU"
                      onClick={togglePassword}
                      className="eye"
                      alt="hide"
                    />
                  )}

                  <Form.Control
                    type={passwordShown ? "text" : "password"}
                    placeholder="Mot de passe"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
              <Button className="bouton" variant="light" type="submit">
                <span className="boutontext" onClick={handleUser}>
                  Connexion
                </span>
              </Button>
              <hr />
              <Button variant="primary" href="/accountCreate">
                <span className="boutontext">Pas de compte ? Créez-en un</span>
              </Button>{""}
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;