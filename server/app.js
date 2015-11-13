var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/texas_method';

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.get('/data', function(req,res){
    var results = [];

    pg.connect(connectionString, function (err, client) {
        var query = client.query("SELECT * FROM workout_log ORDER BY id DESC");

        // Stream results back one row at a time, push into results array
        query.on('row', function (row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            client.end();
            return res.json(results);
        });

        // Handle Errors
        if (err) {
            console.log(err);
        }
    });
});

app.get('/chart', function(req,res){
    var results = [];

    pg.connect(connectionString, function (err, client) {
        var query = client.query("SELECT squat FROM workout_log ORDER BY id ASC");

        // Stream results back one row at a time, push into results array
        query.on('row', function (row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            client.end();
            return res.json(results);
        });

        // Handle Errors
        if (err) {
            console.log(err);
        }
    });
});


app.post('/data', function(req, res){

    var addedWeight = {
        "squat": req.body.squat,
        "bench":req.body.bench,
        "row": req.body.row,
        "ohp": req.body.ohp,
        "deadlift": req.body.deadlift,
        "workout": req.body.workout
    };

    pg.connect(connectionString, function(err, client){
        client.query("INSERT INTO workout_log (squat, ohp, deadlift, workout, bench, row) VALUES ($1, $2, $3, $4, $5, $6)",
            [addedWeight.squat, addedWeight.ohp, addedWeight.deadlift, addedWeight.workout, addedWeight.bench, addedWeight.row],
            function (err, result) {
                if (err) {
                    console.log("Error inserting data: ", err);
                    res.send(false);
                }
                res.send(true);
            });
    });

});

app.get("/*", function(req,res,next){
    //console.log("Here is the asset I needs: " , req.params);
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file))
});

app.listen(app.get("port"), function(req,res,next){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;