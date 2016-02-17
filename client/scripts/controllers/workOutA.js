myApp.controller('WorkOutA', ['$scope', '$http', function ($scope, $http) {

  $scope.newWorkout = {};
  $scope.repOptions = [0, 1, 2, 3, 4, 5];

  //Get previous weight and reps to calculate suggested weight

  //POST new workout weights and reps
  $scope.postNewWorkout = function (newWorkout) {
    $http.post('/postNewWorkout/workoutA', newWorkout).then(function () {
      console.log('post is done');
      $scope.newWorkout = {};
    });
  };

}]);
