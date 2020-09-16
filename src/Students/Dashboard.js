import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import studentActions from "../redux/actions";

const Dasboard = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(studentActions.logoutStudent());
  };

  const username = useSelector((state) => state.username);
  const text = username ? (
    <h1>
      {username} is currently logged in{" "}
      <Link to="/" onClick={handleLogout}>
        Student Logout
      </Link>
    </h1>
  ) : (
    <h1>
      Nobody is logged in back to welcome page: <Link to="/">Home</Link>
    </h1>
  );
  return <div>{text}</div>;
};

export default Dasboard;
