import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import studentActions from "../redux/actions";
import StudentNavBar from './StudentNavBar'
import './Lessons.css'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
const Appointment = ({
  children, style, ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: '#ffa83b',
      borderRadius: '8px',
    }}
  >
    {children}
  </Appointments.Appointment>
);

function Lessons() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(studentActions.persistStudent()); });
  const[data, setArtists] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/lessons')
    .then(response => response.json())
    .then(lessons => {
      console.log(lessons)
      setArtists(lessons)
    });
  }, [])
  const id = useSelector((state) => state.id);
console.log(id)
  let data2 = data.filter(data => {
    return data.student_id === id
  })
  return (
    <Paper>
              <StudentNavBar />
        <Scheduler
          data={data2}
        >
          <ViewState
            defaultCurrentDate="2020-09-20"
          />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton 
          />
          <Appointments
            appointmentComponent={Appointment}
          />
        </Scheduler>
      </Paper>
    );
}

export default Lessons