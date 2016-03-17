angular.module('submitExample', [])
    .controller('ExampleController', ['$scope', function ($scope) {
      $scope.list = [];
      $scope.text = 'hello';
      $scope.name = '';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
          }
      };
        
        $scope.submit = function() {
    // set form is submitted
    $scope.submitted = false;

    if ($scope.someForm.$invalid) {
      return;
    }


    $scope.newData = {};

    // set form default state
    $scope.someForm.$setPristine();

    // set form is no submitted
    $scope.submitted = true;

    return;
  }
    
        
        
    }]);
