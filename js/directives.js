app.directive('recModal', function (){
    return {
        controller: 'rectangleCtrl',
        restrict: 'E',
        templateUrl: 'modal/recModal.html'
    };
});

app.directive('circleModal', function(){
    return{
        controller: 'circleCtrl',
        restrict: 'E',
        templateUrl: 'modal/circleModal.html'
    };
});

app.directive('squareModal', function(){
    return {
        controller: 'squareCtrl',
        restrict: 'E',
        templateUrl: 'modal/squareModal.html'
    };
});

app.directive('triModal', function(){
    return {
        controller: 'triangleCtrl',
        restrict: 'E',
        templateUrl: 'modal/triModal.html'
    };
});
app.directive('room', function(){
    return{
        controller: 'indexCtrl',
        restrict: 'E',
        templateUrl: 'views/room.html'
    };
})