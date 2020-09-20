import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import artistActions from "../redux/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ArtistNavBar from "./ArtistNavBar";
import './ArtistDashboard.css'

const Dasboard = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(artistActions.persistArtist()); });
  
  const username = useSelector((state) => state.username);
  const text = username ? (
    
    <div>
      <ArtistNavBar />
    This is the Dashboard for {username}
  </div>
  ) : (
    <h1>
      Nobody is logged in back to welcome page: <Link to="/">Home</Link>
    </h1>
  );
  return <div>
  {text}</div>;
};

export default Dasboard;
