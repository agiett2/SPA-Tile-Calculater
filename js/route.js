app.config(function($routeProvider){
    $routeProvider.when('/rectangle', { templateUrl: 'views/rectangle.html', controller: 'rectangleCtrl'})
    .when('/circle', { templateUrl: 'views/circle.html', controller: 'circleCtrl'})
    .when('/triangle', {templateUrl: 'views/triangle.html', controller: 'triangleCtrl'})
    .when('/square', {templateUrl: 'views/square.html', controller: 'squareCtrl'})
    .otherwise({redirectTo: '/rectangle'});
});