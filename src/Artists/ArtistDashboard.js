import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import artistActions from "../redux/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ArtistNavBar from "./ArtistNavBar";
import './ArtistDashboard.css'

const Dasboard = (props) => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(artistActions.persistArtist()); });
  const[data, setLessons] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/lessons')
    .then(response => response.json())
    .then(lessons => {
      console.log(lessons)
      setLessons(lessons)
    });
  }, [])
  const id = useSelector((state) => state.id);
console.log(id)
  let data2 = data.filter(data => {
    return data.artist_id === id
  })
  console.log(data2)
  

  function deleteLesson(event){
    event.preventDefault()
    const lessonId = event.target.id
    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }   
    fetch(`http://localhost:3000/lessons/${lessonId}`, config)
      .then(r => console.log(r))
      .then(lessons => {
        console.log(lessons)
      })
      window.location.reload()
  }

  const username = useSelector((state) => state.username);
  const profilePicture = useSelector((state) => state.profile_picture);
  console.log(username)
  const text = username ? (
    
    <div>
      <ArtistNavBar />
      <div className="wrapper">
      <div className="profile">
              <button className="profile__button">
                <span className="profile__name">Welcome back {username}!</span>
                <img
                  className="profile__img"
                  src={profilePicture}
                  alt="Profile"
                  loading="lazy"
                />
              </button>
            </div>
      <main className="main">
        <header className="header">
          <div className="header__wrapper">
            <form action="" className="search">
              <button className="search__button focus--box-shadow" type="submit">
                <svg
                  className="search__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                  />
                </svg>
              </button>
              <input
                className="search__input focus--box-shadow"
                type="text"
                placeholder="Lessons"
              />
            </form>

          </div>
        </header>
        <section className="section">
          <header className="section__header">
            <h2 className="section__title">Your Next Lesson</h2>
          </header>
          <ul className="team">
            <li className="team__item">
              <a className="team__link focus--box-shadow" href="/">
                <div className="team__header">
                <div className="project__element project__icon">
                    <div
                      className="icon icon--viking"
                      aria-label="Icon of the 'Showcase Design' project"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        role="img"
                      >
                        <path
                          d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                        />
                      </svg>
                    </div>
                  </div>
                  <button
                    className="setting setting--absolute focus--box-shadow"
                    type="button"
                  >
                    <svg
                      enable-background="new 0 0 515.555 515.555"
                      height="512"
                      viewBox="0 0 515.555 515.555"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
                      />
                      <path
                        d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
                      />
                      <path
                        d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
                      />
                    </svg>
                  </button>
                </div>
                <div className="team__inform">
                  <p className="team__name">Design development</p>
                  <time className="date" datetime="2020-01-10T10:00:00">10 January, 2020</time>
                </div>
              </a>
            </li>
          </ul>
        </section>
        <section className="section">
          <header className="section__header">
            <h2 className="section__title">All Lessons</h2>
            <div className="section__control">
            <button
                className="section__button section__button--painted focus--box-shadow"
                type="button"
                aria-label="Add New project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path
                    d="M20,8.18V3a1,1,0,0,0-2,0V8.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V13.82a3,3,0,0,0,0-5.64ZM19,12a1,1,0,1,1,1-1A1,1,0,0,1,19,12Zm-6,2.18V3a1,1,0,0,0-2,0V14.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V19.82a3,3,0,0,0,0-5.64ZM12,18a1,1,0,1,1,1-1A1,1,0,0,1,12,18ZM6,6.18V3A1,1,0,0,0,4,3V6.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V11.82A3,3,0,0,0,6,6.18ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10Z"
                  />
                </svg>
              </button>
            </div>
          </header>
          <ul className="project">
          {data2.map(data => 
            <li className="project__item">
              <a href="/" className="project__link focus--box-shadow">
                <div className="project__wrapper">
                  <div className="project__element project__icon">
                    <div
                      className="icon icon--viking"
                      aria-label="Icon of the 'Showcase Design' project"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        role="img"
                      >
                        <path
                          d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="project__element project__inform">
                    <span className="project__inform-name">{data.title}</span>
                  </div>
                  <div className="project__element project__photo">
                    <ul className="photo">
                    </ul>
                  </div>
                  <div className="project__element project__date">
                    <time className="date" datetime="2020-05-05T10:00:00">

                    <p>

                    {data.startDate[5]}
                    {data.startDate[6]}
                    {data.startDate[7]}
                    {data.startDate[8]}
                    {data.startDate[9]}
                    </p>
                    From:
                    {data.startDate[11]}
                    {data.startDate[12]}
                    {data.startDate[13]}
                    {data.startDate[14]}
                    {data.startDate[15]}
                    &nbsp;
                    to
                    &nbsp;
                    {data.endDate[11]}
                    {data.endDate[12]}
                    {data.endDate[13]}
                    {data.endDate[14]}
                    {data.endDate[15]}
                    </time>
                  </div>
                  <div className="project__element project__status">
                  </div>
                  <div className="project__element project__setting">
                  <button
                      id={data.id}
                      onClick={deleteLesson}
                      className="setting setting--rotate focus--box-shadow"
                      type="button">
                      X
                    </button>
                  </div>
                </div>
              </a>
            </li>
          )}
          </ul>
        </section>
      </main>
    </div>
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
