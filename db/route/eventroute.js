const express = require("express");
const modelSchema = require("../mongo/modelmongo.js");
const eventRoute = express.Router();

const HTTP_OK = 200;
const HTTP_ERR = 404;

let eventModel = modelSchema.EventModel;
let eventInformation = eventModel.EventInformation;

eventRoute.route('/list').get(function(req, res) {
  eventInformation.find(function(err, events) {
      if (err) {
          console.log(err);
      } else {
          res.json(events);
          console.log(events);
      }
  });
});

eventRoute.route('/details/:id').get(function(req, res) {
  let id = req.params.id;
  eventInformation.findById(id, function(err, event) {
      res.json(event);
  });
});
/*eventRoute.route('/update/:id').post(function(req, res) {
    eventInformation.findById(req.params.id, function(err, event) {
        if (!event)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;
            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});*/

eventRoute.route('/add').post(function(req, res) {
  console.log("add")
  let newEventInformation = new eventInformation(req.body);
  newEventInformation.save()
    .then(event => {
        console.log(event)
        res.status(200).json({'event': 'event added successfully'});
    })
    .catch(err => {
      console.log(err)
        res.status(400).send('adding new todo failed');
    });
});

module.exports = eventRoute;