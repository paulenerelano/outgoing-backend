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
      loc_name: {
        type: String
      },
      loc_coor: {
        lat: {
          type: String
        },
        long: {
          type: String
        },
      }
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