const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the records.
recordRoutes.route("/update_schedule").get(function (req, res) {
  let db_connect = dbo.getDb("myFirstDatabase"); // idk why the Db name is employees. try myFirstDatabase - update all instances for "record" in this file
  db_connect
    .collection("scheduler")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
// the snippet from the sample app depicitng how this works with MonogoDB
    // app.post("/GetData", (req, res) => {
    //     dbo.collection('ScheduleData').find({}).toArray((err, cus) => {
    //         res.send(cus);
    //     });
    // });
// This section will help you create a new record.
recordRoutes.route("/update_schedule/add").post(function (req, res) {
  let db_connect = dbo.getDb("myFirstDatabase");
  console.log(req);
  let myobj = {
    // Sample: person_level: req.body.person_level,
    priority: req.body.priority,
    status: req.body.status,
    subject: req.body.subject,
    end_time: req.body.EndTime,
    is_all_day: req.body.is_all_day,
    start_time: req.body.StartDate,
  };
  console.log(" - - -- - - - -");
  console.log(myobj);
  db_connect.collection("scheduler").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { id: req.body.id };
  let newvalues = {
    $set: {
      person_name: req.body.person_name,
      person_position: req.body.person_position,
      person_level: req.body.person_level,
    },
  };
  db_connect
    .collection("scheduler")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, res) => {
  let db_connect = dbo.getDb("employees");
  var myquery = { id: req.body.id };
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

module.exports = recordRoutes;
