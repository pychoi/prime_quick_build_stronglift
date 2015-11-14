myApp.controller("AnotherController", ["$scope", "$http", function($scope, $http){
    $scope.idArray=[];
    $scope.calcWeight = {};
    $scope.newWeight = {};
    $scope.store = {};

    $scope.getWeight = function(){
        $http.get('/data').then(function(response){
            $scope.idArray = response.data;
            $scope.calcWeight.squat = $scope.idArray[0].squat + 5;
            $scope.calcWeight.ohp = $scope.idArray[1].ohp + 5;
            $scope.calcWeight.deadlift = $scope.idArray[1].deadlift + 5;
            console.log($scope.calcWeight);
        });
    };

    $scope.postWeight = function(foo){
        console.log(foo);
        $scope.store.workout = "B";
        $scope.store.squat = foo.squat;
        $scope.store.ohp = foo.ohp;
        $scope.store.deadlift = foo.deadlift;
        $scope.store.date = foo.date;
        console.log($scope.store);
        $http.post('/data', $scope.store).then(function(response){
            $scope.predicate = response.data;
            $scope.newWeight={};
        });
    };

    $scope.getWeight();

}]);