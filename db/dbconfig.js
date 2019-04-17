/* DB Info */
const dbMongo = require("./mongo/dbmongo.js")();

/* Routes */
const eventRoute = require("./route/eventroute");

/* Exports */
module.exports = function(io){
    return {
        DB: dbMongo,
        Route: {
            Event: eventRoute(io),
        },
    }
}