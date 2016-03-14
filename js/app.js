
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

app.controller('indexCtrl', function($scope, $location){
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
    
   
    $scope.roomSqft = function(){
        var lengthFt = $scope.lengthFt;
        var lengthInches = $scope.lengthInches;
        var widthFt = $scope.widthFt;
        var widthInches = $scope.widthInches;
        var length = ((this.lengthFt *12) + (this.lengthInches *1));
        var width = ((this.widthFt *12) + (this.widthInches *1));
        return  length * width / 144;
        
    };
  
});

app.controller('rectangleCtrl', function($scope){
        $scope.recTileSqft = function (){
        var recLengthFt = $scope.recLengthFt;
        var recLengthInches = $scope.recLengthInches;
        var recWidthFt = $scope.recWidthFt;
        var recWidthInches = $scope.recWidthInches;
       
        if (recLengthInches  && recWidthInches > 0)
            {
                var total = 0;
                var length = ((this.recLengthFt *12) + (this.recLengthInches *1));
                var width = ((this.recWidthFt *12) + (this.recWidthInches *1));
                total = length * width / 144;
                return  total;
            }
        }
});

app.controller('circleCtrl', function($scope){
     $scope.circleSqft = function(){
        var cirFt = $scope.cirFt;
        var cirInches = $scope.cirInches;
        var pi = 3.14159;
        var waste = $scope.cirWaste;
        if (cirInches && cirFt >= 0)
        {
            var total = 0;
            var diameterInches = (this.cirFt * 12) + (this.cirInches * 1);
            var diameterFt = diameterInches /12;
            var radius = diameterFt /2;
            radius2 = radius * radius;
            var sqft = radius2 * pi;
            total = sqft;
            return total;
        }
        if ( cirInches => 0 && cirFt <= 0)
            {
                var total = 0;
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
        var waste = $scope.triWaste;
        if ( triHtFt && triHtInch && triBaseFt && triBaseInch > 0)
            {
                var total = 0;
                var heightInches = (this.triHtFt * 12) + (this.triHtInch * 1);
                var heightFt = heightInches / 12;
                var baseInches = (this.triBaseFt * 12) + (this.triBaseInch * 1);
                var baseFt = baseInches / 12;
                total = (heightFt * baseFt) / 2;
                console.log(total);
                return total;
            }
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
                var total = 0;
                var ft = this.squareInches /12;
                total = ft * ft;
                return total;
            }
    };
});
