const express = require("express");
const modelSchema = require("../mongo/modelmongo.js");
const eventRoute = express.Router();

let eventModel = modelSchema.EventModel;
let eventInformation = eventModel.EventInformation;

const eventRouteWrapper = function(io){
  
  /*Get all events*/
  eventRoute.route('/').get(function(req, res) {
    eventInformation.find(function(err, events) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(events);
            console.log(events);
        }
    });
  });

  /*Get specific event*/
  eventRoute.route('/:id').get(function(req, res) {
    let id = req.params.id;
    eventInformation.findById(id, function(err, event) {
        res.status(200).json(event);
    });
  });

  /*Add 1 event*/
  eventRoute.route('/').post(function(req, res) {
    if(req.body === null || req.body === undefined){
        res.status(400).json({
            'error': 'Empty request body'
        });
    }

    let newEventInformation = new eventInformation(req.body);

    newEventInformation.save()
      .then(event => {
          console.log(event)

          /*TODO: io.emit("some-event") to notify all connected users that an event is added*/

          res.status(201); /*HTTP Standard. HTTP Status Code 201 is returned for modified resources*/
          res.set({'Location' : '/events/' + newEventInformation._id});
          res.json(newEventInformation);
      })
      .catch(err => {
        console.log(err)
          res.status(500).send('adding new todo failed');
      });
  });

  /*Put to specific event (Update all fields)*/
  eventRoute.route('/:id').put(function(req, res) {
      /*TODO: io.emit("some-event") to notify all connected users that an event is updated*/
  });

  /*Patch to specific event (Update specific field/s)*/
  eventRoute.route('/:id').patch(function(req, res) {
      /*TODO: io.emit("some-event") to notify all connected users that an event is updated*/
  });

  /*Delete specific event*/
  eventRoute.route('/:id').delete(function(req, res) {

  });

  return eventRoute;
}

module.exports = eventRouteWrapper;