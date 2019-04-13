const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const dbConfig = require("./db/dbconfig.js");

const app = express();
/*const port = 4000;*/
const port = process.env.PORT;

/* Configure Express App */
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* Routes */
app.use("/event", dbConfig.Route.Event);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("[DEBUG] ERROR 404");
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.log("[DEBUG] ERROR 500");
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
  return;
});

/* Connect DB */
dbConfig.DB.dbConnect();

/* Listen to port */
app.listen(port, function() {
  console.log("Server is running on Port:", port);
});