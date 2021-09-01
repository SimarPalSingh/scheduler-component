import * as React from "react";
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
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
let data = new DataManager({ url: 'http://localhost:4000/update_schedule/add/', adaptor: new UrlAdaptor, crossDomain: true }); 
class Scheduler extends React.Component {
  
  render() {
    return (
      <div id="scheduler-container" style={{ padding: "40px" }}>
        <ScheduleComponent
          height="550px"
          currentView="Month"
          selectedDate={new Date(2018, 1, 15)}
          eventSettings={{
            dataSource: data,
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
