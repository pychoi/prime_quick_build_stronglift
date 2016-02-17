var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var index = require('./routes/index.js');
var workoutData = require('./routes/getAndPostWorkoutData.js');
var chartData = require('./routes/getDataForChart.js');
var postNewWorkout = require('./routes/postNewWorkout.js');

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ expanded: true }));

app.use('/postNewWorkout', postNewWorkout);
app.use('/getAndPostWorkoutData', workoutData);
app.use('/getDataForChart', chartData);
app.use('/', index);

app.listen(app.get('port'), function (req, res, next) {
  console.log('Listening on port: ' + app.get('port'));
});

module.exports = app;
