var express = require('express');
var router = express.Router();

var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stronglifts';

router.get('/workoutA', function (req, res) {
  var results = [];

  pg.connect(connectionString, function (err, client) {
    var query = client.query('SELECT weight');
  });
});

module.exports = router;
