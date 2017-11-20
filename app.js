angular.module("kazuYomikata", [])
    .controller('kazuCtrl', ['$scope', function($scope){
        $scope.number = 4294967296;        

        // (from: https://www.wikiwand.com/ja/%E5%91%BD%E6%95%B0%E6%B3%95)
        const kisus = ["万", "億", "兆", "京", "垓", "𥝱", "穣"]

        $scope.numberText = function(){

            let outText     = "";
            let num         = $scope.number;
            for(let kisuIdx = kisus.length-1; kisuIdx >= 0; kisuIdx--){
                console.log("hello, world");
            
                const diver = Math.pow(10, 4*(kisuIdx + 1))
                const a = Math.floor(num / diver);
                num = num % diver;
                if(a != 0) {
                    outText += `${a}${kisus[kisuIdx]}`;
                }
            }
            return outText+num;
        };
    }]);