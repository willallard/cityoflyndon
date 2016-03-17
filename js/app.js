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
}]);

