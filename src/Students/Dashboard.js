import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import studentActions from "../redux/actions";
import StudentNavBar from "./StudentNavBar";

const Dasboard = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(studentActions.logoutStudent());
  };

  const username = useSelector((state) => state.username);
  const text = username ? (
    <h1>
      
    </h1>
  ) : (
    <h1>
      Nobody is logged in back to welcome page: <Link to="/">Home</Link>
    </h1>
  );
  return <div>
  <StudentNavBar />
  {text}</div>;
};

export default Dasboard;
