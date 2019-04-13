const mongoose = require("mongoose");

/* Online MongoDB */
const DB_PATH_ = "mongodb+srv://kpalevino:snoopy1115@cluster0-myuxv.mongodb.net/outgoing_db"

/* Local MongoDB */
const DB_PATH = "mongodb://localhost:27017/outgoing_db";

module.exports = function() {
  return {
    dbConnect: function(dbName) {
      mongoose
        .connect(DB_PATH, { useNewUrlParser: true } )
        .then( () => {
            console.log("Database is connected")
          },
          err =>  {
            console.log("Can not connect to the database" + err)
          }
        );
    }
  }
}