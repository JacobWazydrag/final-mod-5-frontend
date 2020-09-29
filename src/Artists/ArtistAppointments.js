import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import artistActions from "../redux/actions";
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
  AppointmentTooltip
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
  useEffect(() => { dispatch(artistActions.persistArtist()); });
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
    return data.artist_id === id
  })
  return (
    <div id="calendar-background" >
    <div className="svg-wrapper">
  <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
    <rect className="shape" height="60" width="320" />
  </svg>
   <a href="/new_booking" className="text">&nbsp;NEW</a>
</div>
    <div className="svg-wrapper3">
  <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
    <rect className="shape" height="60" width="320" />
  </svg>
   <a href="/artist_dashboard" className="text">HOME</a>
</div>
    <Paper>
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
          <AppointmentTooltip />
        </Scheduler>
      </Paper>
        </div>
    );
}

export default Lessons