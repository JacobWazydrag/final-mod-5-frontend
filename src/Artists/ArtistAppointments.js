import * as React from 'react';
import './ArtistAppointment.css'
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

const Buttons = ({
    children, style, ...restProps
}) => (
    <TodayButton.Button
      {...restProps}
      id="today-button"
    >
      {children}
    </TodayButton.Button>
  );
  console.log(Buttons)
  
  export default class Demo extends React.PureComponent {
      constructor(props) {
          super(props);
          
          this.state = {
              data: [],
            };
        }
        componentDidMount(){
            fetch('http://localhost:3000/lessons')
            .then(r => r.json())
            .then(lessons => {
                this.setState({
                    data: lessons
                })
            })
        }
        render() {
            const { data } = this.state;
            return (
                <Paper>
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate="2020-09-20"
          />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton 
              buttonComponent={Buttons}
          />
          <Appointments
              
          />
        </Scheduler>
      </Paper>
    );
}
}
