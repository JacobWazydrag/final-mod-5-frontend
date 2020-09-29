import React, { useEffect, useState } from "react";
import ArtistNavBar from "./ArtistNavBar";
import "./NewBooking.css";
import { useDispatch, useSelector } from "react-redux";
import artistActions from "../redux/actions";

const NewBooking = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(artistActions.persistArtist());
  });
  const [studentsObjs, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((response) => response.json())
      .then((students) => {
        console.log(students);
        setStudents(students);
      });
  }, []);
  const id = useSelector((state) => state.id);
console.log(id)
  const [bookingForm, setBookingForm] = useState({
    title: "",
    startDate: "",
    endDate: "",
    location: "",
    artist_id: "",
    student_id: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(artistActions.commitLessonToDB(bookingForm));
    props.history.push("/artist_appointments");
  };

  const handleChange = (e) =>
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });
    console.log(bookingForm)
  console.log(studentsObjs);

  const { title, student_id, location, startDate, endDate, artist_id } = bookingForm;
  return (
      <div>
      <ArtistNavBar />
      <div className="container">
        <div className="container-time">
          <h2 className="heading">New Appointment!</h2>
          <h3 className="heading-days">First give your lesson a title</h3>
          <p>Something the Student can regognize</p>
          <p>e.g. Fine Art with GiGi</p>

          <h3 className="heading-days">Make sure student confirmed</h3>
          <p>Enter all the information</p>
          <p>see your changes on your appointment page</p>
        </div>

        <div className="container-form">
          <form onSubmit={handleSubmit} >
            <h2 className="heading heading-yellow">Appointment Information</h2>

            <div className="form-field">
              <p>Title</p>
              <input 
              value={title}
              onChange={handleChange}
              name="title"
              type="text" 
              placeholder="Title" />
            </div>
            <div className="form-field">
              <p>Location</p>
              <input 
              value={location}
              onChange={handleChange}
              name="location"
              type="text" 
              placeholder="Location" />
            </div>
            <div className="form-field">
              <p>Start</p>
              <input 
              value={startDate}
              onChange={handleChange}
              name="startDate"
              type="datetime-local" />
            </div>
            <div className="form-field">
              <p>End</p>
              <input 
              value={endDate}
              onChange={handleChange}
              name="endDate"
              type="datetime-local" />
            </div>
            <div className="form-field">
              <p>Which Student?</p>
              <select value={student_id} name="student_id" onChange={handleChange} id="#">
                {studentsObjs.map((student) => (
                  <option key={student.id} >
                    {student.id}. {student.first_name} {student.last_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <p>Confirm Your ID</p>
              <select value={artist_id} name="artist_id" onChange={handleChange} id="#">
                  <option>
                    Click
                  </option>
                  <option>
                    {id}
                  </option>
                ))
              </select>
            </div>

            <button className="sub-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewBooking;
