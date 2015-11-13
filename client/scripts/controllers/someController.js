myApp.controller("SomeController", ["$scope", "$http", function($scope, $http){
    $scope.idArray=[];
    $scope.calcWeight = {};
    $scope.newWeight = {};
    $scope.store = {};

    $scope.getWeight = function(){
        $http.get('/data').then(function(response){
            $scope.idArray = response.data;
            $scope.calcWeight.squat = $scope.idArray[0].squat + 5;
            $scope.calcWeight.bench = $scope.idArray[1].bench + 5;
            $scope.calcWeight.row = $scope.idArray[1].row + 5;
            console.log($scope.calcWeight);
        });
    };

    $scope.postWeight = function(foo){
        console.log(foo);
        $scope.store.workout = "A";
        $scope.store.squat = foo.squat;
        $scope.store.bench = foo.bench;
        $scope.store.row = foo.row;
        console.log($scope.store);
        $http.post('/data', $scope.store).then(function(response){
            $scope.predicate = response.data;
            $scope.newWeight={};
        });
    };

    $scope.getWeight();

}]);
