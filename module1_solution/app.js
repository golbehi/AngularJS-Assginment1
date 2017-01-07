(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope){
  $scope.lunchListWithComma = ""; // gets the user's input from textbox
  $scope.output ="";

  $scope.checkLunchList = function(){
    var lunch = $scope.lunchListWithComma;

    // if the textbox is empty or has space char
    if (lunch.length === 0 || (lunch.length === 1 && lunch[0] === " ")) {
      $scope.output = "Please enter data first";
    }
    //textbox is not empty
    else{
      var lunchList = lunch.split(",");
      var counter = 0;

      //looping through the list to find number of empty elements in the array
      for (var i = 0; i < lunchList.length; i++) {
        if (lunchList[i].length !== 0  || !lunchList[i].length === 1) {
          counter++;}
      };

      //generating final output based on counter
      if (counter <= 3) {  $scope.output = "Enjoy!";}
      else { $scope.output = "Too much!";}
    }
  }
}

})();
