/* REPORT A PROBLEM */

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

/* CALENDAR */

$.getScript('http://arshaw.com/js/fullcalendar-1.6.4/fullcalendar/fullcalendar.min.js',function(){
  
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next',
      center: 'title',
      right: 'null'    
      /*right: 'month,agendaWeek,agendaDay'*/
    },
    editable: true,
    events: [
      {
        
        title: 'Shakespeare In The Park',
        start: new Date(y, m, d-3, 18, 0),
        allDay: false
      },
      
      {
        title: 'City Meeting',
        start: new Date(y, m, d, 10, 30),
        allDay: false
      },
      {
        title: 'Car Wash Fundraiser',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false
      },
      {
        title: 'Code Louisville Project Due',
        start: new Date(y, m, d+1, 12, 0),
        end: new Date(y, m, d+1, 15, 0),
        allDay: false
      },
      {
       title: 'Graduation Mixer',
       start: new Date(y, m, d+14, 17, 30),
       end: new Date(y, m, d+14, 19, 0),
       allDay: false
      },
      {
       title: 'Spring Festival at Robsion Park',
       start: new Date(y, m, d+16, 8, 0),
       end: new Date(y, m,d+16, 22, 30 ),
       allDay: false      
      }
    ]
  });
})