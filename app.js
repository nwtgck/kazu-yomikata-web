angular.module("kazuYomikata", [])
    .controller('kazuCtrl', ['$scope', function($scope){
        $scope.number = 4294967296;

        $scope.numberText = function(){
            return $scope.number+"";
        };
    }]);