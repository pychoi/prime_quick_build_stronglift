var myApp = angular.module("myApp", ["ngRoute", "chart.js"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "assets/views/routes/home.html",
        }).
        when('/workouta', {
            templateUrl: "assets/views/routes/workouta.html",
            controller: "SomeController"
        }).
        when('/workoutb', {
            templateUrl: "assets/views/routes/workoutb.html",
            controller: "AnotherController"
        }).
        when('/chart', {
            templateUrl: "assets/views/routes/chart.html",
            controller: "ChartController"
        }).
        otherwise({
            redirectTo: 'home'
        })
}]);


