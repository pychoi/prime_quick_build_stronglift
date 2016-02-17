myApp.controller('ChartController', ['$scope', '$http', function ($scope, $http) {
  $scope.squatArray = [];
  $scope.benchArray = [];
  $scope.ohpArray = [];
  $scope.rowArray = [];
  $scope.deadliftArray = [];

  $scope.labels = [];
  $scope.series = ['Squat', 'Bench', 'OHP', 'Row', 'Deadlift'];

  $scope.getWeight = function () {
      $http.get('/chart').then(function (response) {

        for (var i = 0; i < response.data.length; i++) {
          $scope.squatArray.push(response.data[i].squat);
          $scope.benchArray.push(response.data[i].bench);
          $scope.rowArray.push(response.data[i].row);
          $scope.deadliftArray.push(response.data[i].deadlift);
          $scope.ohpArray.push(response.data[i].ohp);
          $scope.labels.push([i]);
        }

        $scope.data = [$scope.squatArray, $scope.benchArray, $scope.ohpArray,
          $scope.rowArray, $scope.deadliftArray];
      });
    };

  $scope.getWeight();

}]);
