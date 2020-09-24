import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import artistActions from "../redux/actions";
import './NavBar.css'

const ArtistNavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(artistActions.logoutArtist());
  };

    return (
            <nav className="navbar">
    <ul className="navbar-nav">
      <li className="logo">
        <Link to="#" className="nav-link">
          <span id="title-text" className="link-text logo-text">ArtSpace</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              ></path>
            </g>
          </svg>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/artist_dashboard" className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="cat"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="svg-inline--fa fa-cat fa-w-16 fa-9x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z"
                className="fa-secondary"
              ></path>

            </g>
          </svg>
          <span className="link-text">Home</span>
        </Link>
      </li>

      <li className="nav-item">
      <Link className="nav-link" to="/browse_students">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="alien-monster"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                className="fa-secondary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Browse Students</span>
          </Link>
      </li>

      <li className="nav-item">
        <Link to="/artist_appointments" className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="space-station-moon-alt"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"
                className="fa-secondary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Bookings</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/lessons" className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="space-shuttle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"
                className="fa-secondary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Edit Profile</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link onClick={handleLogout} to="/" className="nav-link">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="space-shuttle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M 497 273 L 329 441 c -15 15 -41 4.5 -41 -17 v -96 H 152 c -13.3 0 -24 -10.7 -24 -24 v -96 c 0 -13.3 10.7 -24 24 -24 h 136 V 88 c 0 -21.4 25.9 -32 41 -17 l 168 168 c 9.3 9.4 9.3 24.6 0 34 Z M 192 436 v -40 c 0 -6.6 -5.4 -12 -12 -12 H 96 c -17.7 0 -32 -14.3 -32 -32 V 160 c 0 -17.7 14.3 -32 32 -32 h 84 c 6.6 0 12 -5.4 12 -12 V 76 c 0 -6.6 -5.4 -12 -12 -12 H 96 c -53 0 -96 43 -96 96 v 192 c 0 53 43 96 96 96 h 84 c 6.6 0 12 -5.4 12 -12 Z"
                className="fa-secondary"
              ></path>
            </g>
          </svg>
          <span className="link-text">Log Out</span>
        </Link>
      </li>


    </ul>
  </nav>
    )
}
export default ArtistNavBar