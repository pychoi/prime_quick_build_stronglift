var myApp = angular.module("myApp", ["ngRoute", "chart.js"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "assets/views/routes/home.html",
        }).
        when('/workouta', {
            templateUrl: "assets/views/routes/workoutA.html",
            controller: "WorkOutA"
        }).
        when('/workoutb', {
            templateUrl: "assets/views/routes/workoutb.html",
            controller: "WorkOutB"
        }).
        when('/chart', {
            templateUrl: "assets/views/routes/chart.html",
            controller: "ChartController"
        }).
        otherwise({
            redirectTo: 'home'
        })
}]);


