//myApp.controller("ChartController", ["$scope", "$http", function($scope, $http){
//    $scope.squatArray=[];
//    $scope.calcWeight = {};
//    $scope.newWeight = {};
//    $scope.store = {};
//
//    $scope.getWeight = function(){
//        $http.get('/chart').then(function(response){
//            $scope.squatArray = response.data.squat;
//            //$scope.calcWeight.squat = $scope.idArray[0].squat;
//            //$scope.calcWeight.bench = $scope.idArray[1].bench + 5;
//            //$scope.calcWeight.row = $scope.idArray[1].row + 5;
//            console.log($scope.squatArray);
//        });
//    };
//
//    $scope.getWeight();
//
//}]);