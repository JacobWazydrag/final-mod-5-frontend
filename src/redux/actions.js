// ARTIST API CONSTANTS
// STUDENT API CONSTANTS

const BASE_URL = 'http://localhost:3000';
const ARTISTS_URL = BASE_URL + '/artists';
const LESSONS_URL = BASE_URL + '/lessons';
const STUDENTS_URL = BASE_URL + '/students';
const ARTIST_PERSIST_URL = BASE_URL + '/artist_persist';
const PERSIST_URL = BASE_URL + '/persist'
const LOGIN_URL = BASE_URL + '/login';
const SPECIFIC_ARTIST_URL = id => ARTISTS_URL + '/' + id;
const SPECIFIC_STUDENT_URL = id => STUDENTS_URL + '/' + id;

// Redux LESSONS Actions
const commitLessonToDB = lessonsObj => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(lessonsObj)
  };
  fetch(LESSONS_URL, config)
    .then(r => r.json())
    .then(lessons => {
      dispatch(setLessonsAction(lessons));
    });
};

const setLessonsAction = lessonsObj => ({
  type: 'SET_LESSON',
  payload: lessonsObj
});

const persistLessons = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  fetch(LESSONS_URL, config)
    .then(r => r.json())
    .then(lessons => {
      console.log(lessons)
      dispatch(setLessonsAction(lessons));
    });
};

const getLessonAction = lessonsObj => ({
  type: 'SET_LESSONS',
  payload: lessonsObj
});
const getLessons = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  fetch(LESSONS_URL, config)
    .then(r => r.json())
    .then(lessons => {
      dispatch(getLessonAction(lessons));
    });
};
// Redux ARTISTS Actions
const setArtistAction = artistObj => ({
  type: 'SET_ARTIST',
  payload: artistObj
});

const clearArtistAction = () => ({
  type: 'CLEAR_ARTIST'
});

// Fetch

const newArtistToDB = artistObj => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(artistObj)
  };
  fetch(ARTISTS_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setArtistAction(data.artist));
      localStorage.setItem('token', data.token);
    });
};

const deleteArtistFromDB = artistId => dispatch => {
  const config = {
    method: 'DELETE'
  };
  fetch(SPECIFIC_ARTIST_URL(artistId), config).then(r => {
    dispatch(clearArtistAction());
    localStorage.clear();
  });
};

const loginArtistToDB = artistCredentials => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(artistCredentials)
  };
  fetch(LOGIN_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setArtistAction(data.artist));
      localStorage.setItem('token', data.token);
    });
};

const persistArtist = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `bearer ` + localStorage.getItem('token')
    }
  };
  
  fetch(ARTIST_PERSIST_URL, config)
    .then(r => r.json())
    .then(artistInstance => {
      dispatch(setArtistAction(artistInstance));
    });
};

const logoutArtist = () => dispatch => {
  dispatch(clearArtistAction());
  localStorage.clear();
};


// Redux STUDENT Actions

const setStudentAction = studentObj => ({
  type: 'SET_STUDENT',
  payload: studentObj
});

const clearStudentAction = () => ({
  type: 'CLEAR_STUDENT'
});

// Fetch

const newStudentToDB = studentObj => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(studentObj)
  };
  fetch(STUDENTS_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setStudentAction(data.student));
      localStorage.setItem('token', data.token);
    });
};

const deleteStudentFromDB = studentId => dispatch => {
  const config = {
    method: 'DELETE'
  };
  fetch(SPECIFIC_STUDENT_URL(studentId), config).then(r => {
    dispatch(clearStudentAction());
    localStorage.clear();
  });
};

const loginStudentToDB = studentCredentials => dispatch => {
  console.log(studentCredentials)
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(studentCredentials)
  };
  fetch(LOGIN_URL, config)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      dispatch(setStudentAction(data.student));
      localStorage.setItem('token', data.token);
    });
};

const persistStudent = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `bearer ` + localStorage.getItem('token')
    }
  };
  fetch(PERSIST_URL, config)
    .then(r => r.json())
    .then(studentInstance => {
      dispatch(setStudentAction(studentInstance));
    });
};

const logoutStudent = () => dispatch => {
  dispatch(clearStudentAction());
  localStorage.clear();
};

export default {
  newStudentToDB,
  deleteStudentFromDB,
  loginStudentToDB,
  persistStudent,
  logoutStudent,
  newArtistToDB,
  deleteArtistFromDB,
  loginArtistToDB,
  persistArtist,
  logoutArtist,
  getLessons,
  persistLessons,
  commitLessonToDB
};