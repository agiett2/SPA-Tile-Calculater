
var app = angular.module('app', [ 'ngRoute']);

 app.filter('singleDecimal', function ($filter) {
    return function (input) {
        if (isNaN(input)) return input;
        return Math.round(input * 10) / 10;
        };
    });

app.filter('setDecimal', function ($filter) {
    return function (input, places) {
        if (isNaN(input)) return input;
        // If we want 1 decimal place, we want to mult/div by 10
        // If we want 2 decimal places, we want to mult/div by 100, etc
        // So use the following to create that factor
        var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
        return Math.round(input * factor) / factor;
    };
});

app.controller('indexCtrl', function($rootScope, $scope, $location){
    $scope.rectangle = true;
    $scope.rectanglePath = function(){
        $location.path('/rectangle');
    }
    $scope.circlePath = function(){
        $location.path('/circle');
    }
    $scope.trianglePath = function(){
        $location.path('/triangle');
    }
    $scope.squarePath = function(){
        $location.path('/square');
    }
    
    $rootScope.lengthft = 0;
    $rootScope.widthft = 0;
    $rootScope.lengthinches = 0;
    $rootScope.widthinches = 0;
    $rootScope.totalLength = 0;
    $rootScope.totalWidth = 0;
    $rootScope.total = 0;
   
    $scope.roomSqft = function(){
        this.lengthft = $scope.lengthFt;
        this.lengthinches = $scope.lengthInches;
        this.widthft = $scope.widthFt;
        this.widthinches = $scope.widthInches;
        this.totalLength = ((this.lengthft *12) + (this.lengthinches *1));
        this.totalWidth = ((this.widthft *12) + (this.widthinches *1));
        return this.total = this.totalLength * this.totalWidth / 144;
    };
  
});

app.controller('rectangleCtrl', function($scope){
        $scope.recTileSqft = function (){
        var recLengthFt = $scope.recLengthFt;
        var recLengthInches = $scope.recLengthInches;
        var recWidthFt = $scope.recWidthFt;
        var recWidthInches = $scope.recWidthInches;
        var length = ((this.recLengthFt *12) + (this.recLengthInches *1));
        var width = ((this.recWidthFt *12) + (this.recWidthInches *1));
        return this.total = length * width / 144;
        }
});

app.controller('circleCtrl', function($scope){
     $scope.circleSqft = function(){
        var cirFt = $scope.cirFt;
        var cirInches = $scope.cirInches;
        var pi = 3.14159;
        if (cirInches && cirFt >= 0)
        {
            var diameterInches = (this.cirFt * 12) + (this.cirInches * 1);
            var diameterFt = diameterInches /12;
            var radius = diameterFt /2;
            radius2 = radius * radius;
            var sqft = radius2 * pi;
            this.total = sqft;
            return this.total;
        }
        if ( cirInches => 0 && cirFt <= 0)
            {
               
                var diameterInches = this.cirInches;
                var diameterFt = diameterInches / 12;
                var radius = diameterFt / 2;
                var radius2 = radius * radius;
                var sqft = radius2 * pi;
                total = sqft;
                return total;
            }
    };
});

app.controller('triangleCtrl', function($scope){
    $scope.triSqft = function (){
        var triHtFt = $scope.triHtFt;
        var triHtInch = $scope.triHtInch;
        var triBaseFt = $scope.triBaseFt;
        var triBaseInch = $scope.triBaseInch;
        var heightInches = (this.triHtFt * 12) + (this.triHtInch * 1);
        var heightFt = heightInches / 12;
        var baseInches = (this.triBaseFt * 12) + (this.triBaseInch * 1);
        var baseFt = baseInches / 12;
        return this.total = (heightFt * baseFt) / 2;
       
            
    };
});

app.controller('squareCtrl', function ($scope){
    $scope.sqSqft = function(){
        var squareSqft = $scope.squareSqft;
        var squareInches = $scope.squareInches;
        var waste = $scope.sqWaste;
        if (squareSqft && squareInches  > 0 )
        {
            var total = 0;
            var ft = 0;
            var totalInches = 0;
            totalInches = (this.squareSqft * 12) + (this.squareInches * 1); 
            ft = totalInches / 12;
            console.log(ft);
            total = ft * ft;
            return total;
        }
        if (squareInches > 0 && squareSqft <= 0 )
            {
                var ft = this.squareInches /12;
                this.total = ft * ft;
                return this.total;
            }
    };
});
