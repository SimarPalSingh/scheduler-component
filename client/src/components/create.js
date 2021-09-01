import React, { Component } from "react";
// This will require to npm install axios
import axios from "axios";

export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangePriority = this.onChangePriority.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeEndTime = this.onChangeEndTime.bind(this);
    this.onChangeStartTime = this.onChangeStartTime.bind(this);
    this.onChangeIsAllDay = this.onChangeIsAllDay.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      priority: "",
      status: "",
      subject: "",
      end_time: "",
      statustart_time: "",
      is_all_day: "",
    };
  }

  // These methods will update the state properties.
  onChangePriority(e) {
    this.setState({
      priority: e.target.value,
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }
  onChangeEndTime(e) {
    this.setState({
      end_time: e.target.value,
    });
  }

  onChangeStartTime(e) {
    this.setState({
      start_time: e.target.value,
    });
  }

  onChangeIsAllDay(e) {
    this.setState({
      is_all_day: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newschedule) to the database.
    const newschedule = {
      priority: this.state.priority,
      status: this.state.status,
      subject: this.statesubject,
      end_time: this.state.end_time,
      statustart_time: this.state.statustart_time,
      is_all_day: this.state.is_all_day,
    };

    axios
      .post("http://localhost:4000/update_schedule/add", newschedule)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      priority: "",
      status: "",
      subject: "",
      end_time: "",
      statustart_time: "",
      is_all_day: "",
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ margin: '2rem', padding: '2rem' }}>
        <h3>Create New Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Priority: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.priority}
              onChange={this.onChangePriority}
            />
          </div>
          <div className="form-group">
            <label>Subject: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.subject}
              onChange={this.onChangeSubject}
            />
          </div>
          <div className="form-group">
            <label>Status: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.status}
              onChange={this.onChangeStatus}
            />
          </div>
          <div className="form-group">
            <label>Start Time: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.start_time}
              onChange={this.onChangeStartTime}
            />
          </div>
          <div className="form-group">
            <label>End Time: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.end_time}
              onChange={this.onChangeEndTime}
            />
          </div>
          <div className="form-group">
            <label>Is All Day: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.is_all_day}
              onChange={this.onChangeIsAllDay}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create person"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
