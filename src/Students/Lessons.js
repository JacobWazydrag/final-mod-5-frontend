import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from './today-appointments';

export default class Lessons extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
        >
          <MonthView
            startDayHour={8}
            endDayHour={13}
          />
          <Appointments />
          <AppointmentTooltip />
        </Scheduler>
      </Paper>
    );
  }
}
