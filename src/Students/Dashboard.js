import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import StudentNavBar from "./StudentNavBar";
import './Dashboard.css'

const Dasboard = () => {

  useEffect(() => { dispatch(studentActions.persistStudent()); }, []);
  
  const username = useSelector((state) => state.username);
  const text = username ? (
    <h1>
      Hello! {username}
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
