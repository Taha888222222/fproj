import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Dropdown,
} from "react-bootstrap";
import "./Style.css";

import { useDispatch, useSelector } from "react-redux";

import { current, logout } from "../../JS/Actions/user";
import { useNavigate } from "react-router-dom";
import { currentAdmin } from "../../JS/Actions/admin";



const NavBar = ({inputSearch,setInputSearch}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const admin = useSelector((state) => state.adminReducer.admin);
  const isAdmin = useSelector((state) => state.adminReducer.isAdmin);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
 const handleChange=(e)=>{
  setInputSearch(e.target.value)
 }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAdmin());
    }
  }, [dispatch]);

  return (
    <header className="NavBar">
      
      <Navbar expand="lg" className="v1">
        <Container  fluid>
         
        <Nav.Link href="/">  <img src="https://img.freepik.com/vecteurs-libre/tecnologie-isometrique-abstrait_52683-842.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=sph" height="70px" style={{ marginLeft:"60%" }}className="nostech" alt="nostech" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px",margin:"12%" }}
              navbarScroll
            >
              <Nav.Link href="/Produits">
                <span className="v4">Nos Produits</span>
              </Nav.Link>

              <Nav.Link href="/Aproposdenous">
                {" "}
                <span className="v4">À propos de nous</span>
              </Nav.Link>
              <Form className="search">
                <FormControl type="search" placeholder="Chercher un produit" value={inputSearch}
                onChange={handleChange}/>
              </Form>
              {isAuth ? (
                <div className="logout">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="v11"
                      id="dropdown-basic"
                      variant="secondary"
                    >
                      <span className="v3">
                        {" "}
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
                          height="23px"
                          className="userico"
                          alt="img"
                        />{" "}
                        {user && user.name}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => navigate(`/profile/${user._id}`)}
                      >
                        Profil
                      </Dropdown.Item>
                      <Dropdown.Item href="/Produits">
                        Nos Produits
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="/"
                        onClick={() => dispatch(logout())}
                      >
                        {" "}
                        <img
                          src="https://www.trafficsigns.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/r/ar-714.gif.jpg"
                          height="20px"
                          className="userico"
                          alt="img"
                        />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : isAuthAdmin && isAdmin ? (
                <div className="logoutAdmin">
                  <Nav.Link href="/AllOrders">
                    {" "}
                    <img
                      src="https://logowik.com/content/uploads/images/shopping-bag6504.jpg"
                      height="30px"
                      className="userico"
                      alt="img"
                    />
                    <span className="v4">Order(s)</span>
                  </Nav.Link>
                  
                  <Nav.Link href="/users">
                    {" "}
                    <img
                      src="https://150136929.v2.pressablecdn.com/wp-content/uploads/2022/12/AllUsers-2.png"
                      height="30px"
                      className="userico"
                      alt="img"
                    />
                    <span className="v4">Utilisateurs</span>
                  </Nav.Link>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="v11"
                      id="dropdown-basic"
                      variant="secondary"
                    >
                      <span className="v3">
                        {" "}
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
                          height="20px"
                          className="userico"
                          alt="img"
                        />{" "}
                        {admin && admin.name}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => navigate(`/profile/${admin._id}`)}
                      >
                        Profil
                      </Dropdown.Item>
                      <Dropdown.Item href="Produits">
                        Nos Produits
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="/"
                        onClick={() => dispatch(logout())}
                      >
                        {" "}
                        <img
                          src="https://www.trafficsigns.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/r/ar-714.gif.jpg"
                          height="20px"
                          className="userico"
                          alt="img"
                        />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : (
                <div className="inscription">
                  <Nav.Link href="/login">
                    {" "}
                    <span className="v4">Login</span>
                  </Nav.Link>
                  <Button className="v2" variant="light" href="/accountCreate">
                    {" "}
                    <span className="v3">Inscription</span>
                  </Button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;