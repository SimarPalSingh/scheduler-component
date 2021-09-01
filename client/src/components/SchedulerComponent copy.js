import * as React from "react";

import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  ViewDirective,
  ViewsDirective,
} from "@syncfusion/ej2-react-schedule";
class Scheduler extends React.Component {
  constructor() {
    super(...arguments);
    this.data = [
      {
        Id: 2,
        Subject: "Meeting",
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 12, 30),
        IsAllDay: false,
        Status: "Completed",
        Priority: "High",
      },
    ];
  }
  render() {
    return (
      <div id="scheduler-container" style={{ padding: "40px" }}>
        <ScheduleComponent
          height="550px"
          currentView="Month"
          selectedDate={new Date(2018, 1, 15)}
          eventSettings={{
            dataSource: this.data,
            fields: {
              id: "Id",
              subject: { name: "Subject" },
              isAllDay: { name: "IsAllDay" },
              startTime: { name: "StartTime" },
              endTime: { name: "EndTime" },
            },
          }}
        >
          <ViewsDirective>
            <ViewDirective option="Day" />
            <ViewDirective option="Week" />
            <ViewDirective
              option="WorkWeek"
              startHour="08:00"
              endHour="17:00"
            />
            <ViewDirective option="Month" showWeekend={false} />
            <ViewDirective option="Agenda" />
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>

      </div>
    );
  }
}
export default Scheduler;
