import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import "./UserList.css";
import UsersCard from "../../Components/Card/UsersCard";
import { getallusers } from "../../JS/Actions/admin";

const UserList = () => {
  const dispatch = useDispatch();
  const listusers = useSelector((state) => state.adminReducer.listusers);

  useEffect(() => {
    dispatch(getallusers());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UTILISATEURS</title>
        <link rel="canonical" />
      </Helmet>
      <h1 className="Profile">LISTE UTILISATEURS</h1>
      <div className="Userlist">
        {listusers.map((el) => (
          <UsersCard user={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;