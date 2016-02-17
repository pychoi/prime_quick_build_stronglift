var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/stronglifts';

router.post('/workoutA', function (req, res) {
  console.log(req.body);

  var newWorkoutSquat = {
    'date': req.body.date,
    'weight': req.body.squat.weight,
    'set1': req.body.squat.set1,
    'set2': req.body.squat.set2,
    'set3': req.body.squat.set3,
    'set4': req.body.squat.set4,
    'set5': req.body.squat.set5,
  };

  var newWorkoutBench = {
    'date': req.body.date,
    'weight': req.body.bench.weight,
    'set1': req.body.bench.set1,
    'set2': req.body.bench.set2,
    'set3': req.body.bench.set3,
    'set4': req.body.bench.set4,
    'set5': req.body.bench.set5,
  };

  var newWorkoutRow = {
    'date': req.body.date,
    'weight': req.body.row.weight,
    'set1': req.body.row.set1,
    'set2': req.body.row.set2,
    'set3': req.body.row.set3,
    'set4': req.body.row.set4,
    'set5': req.body.row.set5,
  };

  pg.connect(connectionString, function (err, client) {
    if (err) {
      console.log('could not connect to postgres', err);
    }

    client.query('INSERT INTO squat (workout_date, squat_weight, set1_reps, set2_reps, set3_reps, set4_reps, set5_reps)\
     VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [newWorkoutSquat.date, newWorkoutSquat.weight, newWorkoutSquat.set1, newWorkoutSquat.set2, newWorkoutSquat.set3, newWorkoutSquat.set4, newWorkoutSquat.set5],
        function (err, result) {
          if (err) {
            console.log('Error inserting into squats: ', err);
          }
        });

    client.query('INSERT INTO bench_press (workout_date, bench_weight, set1_reps, set2_reps, set3_reps, set4_reps, set5_reps)\
     VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [newWorkoutBench.date, newWorkoutBench.weight, newWorkoutBench.set1, newWorkoutBench.set2, newWorkoutBench.set3, newWorkoutBench.set4, newWorkoutBench.set5],
        function (err, result) {
          if (err) {
            console.log('Error inserting into bench_press: ', err);
          }
        });

    client.query('INSERT INTO row (workout_date, row_weight, set1_reps, set2_reps, set3_reps, set4_reps, set5_reps)\
     VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [newWorkoutRow.date, newWorkoutRow.weight, newWorkoutRow.set1, newWorkoutRow.set2, newWorkoutRow.set3, newWorkoutRow.set4, newWorkoutRow.set5],
        function (err, result) {
          if (err) {
            console.log('Error inserting into row: ', err);
          }
        });

  });

  res.send('this is crazy');

});

module.exports = router;
