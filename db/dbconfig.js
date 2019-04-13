/* DB Info */
const dbMongo = require("./mongo/dbmongo.js")();

/* Routes */
const eventRoute = require("./route/eventroute");

/* Exports */
module.exports = {
  DB: dbMongo,
  Route: {
    Event: eventRoute,
  },
}