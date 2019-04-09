const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Outgoing = new Schema({
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
  }
});
module.exports = mongoose.model('Outgoing', Outgoing);
