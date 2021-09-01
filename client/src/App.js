import * as React from "react";
import { Route } from "react-router-dom";

// syncfusion Scheduler
import Scheduler from "./components/SchedulerComponent";
// for the navabr
import MyNavbar from "./components/NavBar";
import Create from "./components/create";
class App extends React.Component {
  render() {
    return (
      <div>
        <div id="container">
          <MyNavbar />
        </div>
        <div id="container">
          {/* <Route path="/create"> */}
            <Create />
          {/* </Route> */}
        </div>
        <div>
          <Scheduler />
        </div>
      </div>
    );
  }
}
export default App;
