import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import studentActions from "../redux/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import StudentNavBar from "./StudentNavBar";
import './Dashboard.css'

const Dasboard = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(studentActions.persistStudent()); });

  const username = useSelector((state) => state.username);
  const text = username ? (
    <div class="wrapper">
    
    <main class="main">
      <header class="header">
        <div class="header__wrapper">
          <form action="" class="search">
            <button class="search__button focus--box-shadow" type="submit">
              <svg
                class="search__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                />
              </svg>
            </button>
            <input
              class="search__input focus--box-shadow"
              type="text"
              placeholder="Project search"
            />
          </form>
          <div class="profile">
            <button class="profile__button">
              <span class="profile__name">Jessica</span>
              <img
                class="profile__img"
                src=""
                alt="Profile"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </header>
      <section class="section">
        <header class="section__header">
          <h2 class="section__title">Teams</h2>
          <a href="/" class="section__link">View all</a>
        </header>
        <ul class="team">
          <li class="team__item">
            <a class="team__link focus--box-shadow" href="/">
              <div class="team__header">
                <ul class="photo">
                  <li class="photo__item">
                    <img
                      src=""
                      alt="Jessica"
                    />
                  </li>
                </ul>
                <button
                  class="setting setting--absolute focus--box-shadow"
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
              <div class="team__inform">
                <p class="team__name">Product presentation</p>
                <time class="date" datetime="2020-05-05T10:00:00">05 May, 2020</time>
              </div>
            </a>
          </li>
          <li class="team__item">
            <a class="team__link focus--box-shadow" href="/">
              <div class="team__header">
                <ul class="photo">
                  <li class="photo__item">
                    <img
                      src=""
                      alt="Jessica"/>
                  </li>
                </ul>
                <button
                  class="setting setting--absolute focus--box-shadow"
                  type="button">
                  <svg
                    enable-background="new 0 0 515.555 515.555"
                    height="512"
                    viewBox="0 0 515.555 515.555"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/>
                    <path
                      d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/>
                    <path
                      d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"/>
                  </svg>
                </button>
              </div>
              <div class="team__inform">
                <p class="team__name">New project</p>
                <time class="date" datetime="2020-05-01T10:00:00">01 May, 2020</time>
              </div>
            </a>
          </li>
          <li class="team__item">
            <a class="team__link focus--box-shadow" href="/">
              <div class="team__header">
                <ul class="photo">
                  <li class="photo__item">
                    <img
                      src=""
                      alt="Jessica"
                    />
                  </li>
                </ul>
                <button
                  class="setting setting--absolute focus--box-shadow"
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
              <div class="team__inform">
                <p class="team__name">Design development</p>
                <time class="date" datetime="2020-01-10T10:00:00">10 January, 2020</time>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <section class="section">
        <header class="section__header">
          <h2 class="section__title">Projects</h2>
          <div class="section__control">
            <button
              class="section__button focus--box-shadow"
              type="button"
              aria-label="Filter projects"
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
            <button
              class="section__button section__button--painted focus--box-shadow"
              type="button"
              aria-label="Add New project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path
                  d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"
                />
              </svg>
            </button>
          </div>
        </header>
        <ul class="project">
          <li class="project__item">
            <a href="/" class="project__link focus--box-shadow">
              <div class="project__wrapper">
                <div class="project__element project__icon">
                  <div
                    class="icon icon--viking"
                    aria-label="Icon of the 'Showcase Design' project"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="presentation"
                    >
                      <path
                        d="M7,10H9A1,1,0,0,0,9,8H7a1,1,0,0,0,0,2ZM21,4H13V3a1,1,0,0,0-2,0V4H3A1,1,0,0,0,2,5V15a3,3,0,0,0,3,3H9.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L11,19.41V21a1,1,0,0,0,2,0V19.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L14.41,18H19a3,3,0,0,0,3-3V5A1,1,0,0,0,21,4ZM20,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V6H20ZM7,14h6a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="project__element project__inform">
                  <span class="project__inform-name">Product presentation</span>
                </div>
                <div class="project__element project__photo">
                  <ul class="photo">
                    <li class="photo__item">
                      <img
                        src=""
                        alt="Jessica"/>
                    </li>
                  </ul>
                </div>
                <div class="project__element project__date">
                  <time class="date" datetime="2020-05-05T10:00:00">05 May, 2020</time>
                </div>
                <div class="project__element project__status">
                  <span class="status status--published">Published</span>
                </div>
                <div class="project__element project__setting">
                  <button
                    class="setting setting--rotate focus--box-shadow"
                    type="button">
                    <svg
                      enable-background="new 0 0 515.555 515.555"
                      height="512"
                      viewBox="0 0 515.555 515.555"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg">
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
              </div>
            </a>
          </li>
          <li class="project__item">
            <a href="/" class="project__link focus--box-shadow">
              <div class="project__wrapper">
                <div class="project__element project__icon">
                  <div
                    class="icon icon--rajah"
                    aria-label="Icon for the project 'Book cover design'">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="presentation">
                      <path
                        d="M15,6H9A1,1,0,0,0,8,7v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V7A1,1,0,0,0,15,6Zm-1,4H10V8h4Zm3-8H5A1,1,0,0,0,4,3V21a1,1,0,0,0,1,1H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Zm1,17a1,1,0,0,1-1,1H6V4H17a1,1,0,0,1,1,1Z"/>
                    </svg>
                  </div>
                </div>
                <div class="project__element project__inform">
                  <span class="project__inform-name">Book cover design</span>
                </div>
                <div class="project__element project__photo">
                  <ul class="photo">
                    <li class="photo__item">
                      <img
                        src=""
                        alt="Jessica"/>
                    </li>
                  </ul>
                </div>
                <div class="project__element project__date">
                  <time class="date" datetime="2020-05-05T10:00:00">13 February, 2020</time>
                </div>
                <div class="project__element project__status">
                  <span class="status status--published">Published</span>
                </div>
                <div class="project__element project__setting">
                  <button
                    class="setting setting--rotate focus--box-shadow"
                    type="button">
                    <svg
                      enable-background="new 0 0 515.555 515.555"
                      height="512"
                      viewBox="0 0 515.555 515.555"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg">
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
              </div>
            </a>
          </li>
          <li class="project__item">
            <a href="/" class="project__link focus--box-shadow">
              <div class="project__wrapper">
                <div class="project__element project__icon">
                  <div
                    class="icon icon--viking"
                    aria-label="Icon for the project 'Book cover design'"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="presentation"
                    >
                      <path
                        d="M14,18a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,14,18Zm-4,0a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,10,18ZM19,6H17.62L15.89,2.55a1,1,0,1,0-1.78.9L15.38,6H8.62L9.89,3.45a1,1,0,0,0-1.78-.9L6.38,6H5a3,3,0,0,0-.92,5.84l.74,7.46a3,3,0,0,0,3,2.7h8.38a3,3,0,0,0,3-2.7l.74-7.46A3,3,0,0,0,19,6ZM17.19,19.1a1,1,0,0,1-1,.9H7.81a1,1,0,0,1-1-.9L6.1,12H17.9ZM19,10H5A1,1,0,0,1,5,8H19a1,1,0,0,1,0,2Z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="project__element project__inform">
                  <span class="project__inform-name">Logo redesign for eyeglass store</span>
                </div>
                <div class="project__element project__photo">
                  <ul class="photo">
                    <li class="photo__item">
                      <img
                        src=""
                        alt="Jessica"/>
                    </li>
                  </ul>
                </div>
                <div class="project__element project__date">
                  <time class="date" datetime="2020-05-05T10:00:00">01 February, 2020</time>
                </div>
                <div class="project__element project__status">
                  <span class="status status--in-work">In work</span>
                </div>
                <div class="project__element project__setting">
                  <button
                    class="setting setting--rotate focus--box-shadow"
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
              </div>
            </a>
          </li>
        </ul>
      </section>
    </main>
  </div>
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
