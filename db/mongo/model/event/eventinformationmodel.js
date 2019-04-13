const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventInformation = new Schema(
  {
    name: {
      type: String
    },

    description: {
      type: String
    },

    summary: {
      type: String
    },

    location: {
      type: String
    },

    startdate: {
      type: Date
    },

    enddate: {
      type: Date
    },
  },
  
  {
    collection: "event_information"
  }
);
module.exports = mongoose.model('EventInformation', EventInformation);