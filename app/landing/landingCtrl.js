(function() {
  function landingCtrl($scope, landingSvc) {
      
      
      $scope.xx="";
      $scope.yy="";
      
      var cities= [{
                "name": "hyderabad",
                stateCode: "TS"
            }, {
                "name": "khammam",
                stateCode: "TS"
            }, {
                "name": "vijayawada",
                stateCode: "AP"
            }, {
                "name": "vizag",
                stateCode: "AP"
            }];
      
      $scope.states = [{
            "name": "Telangana",
            code: "TS"
}, {
            "name": "Andhra Pradesh",
            code: "AP"
}];
      
      $scope.loadCitiesByState = function(){
         var stateCode = $scope.yy.code;
          $scope.citiesListHere = getCitiesByState(stateCode);
      };
      
      function getCitiesByState(code) {
            var cityList = _.where(cities, {
                stateCode : code
            });
            return cityList;
        }
       
     $scope.caption=false;
    $scope.data = function() {
      landingSvc.getWeather($scope.xx.name,$scope.yy.name)
        .then(function(response) {
          $scope.weatherData = response.data.query.results.channel;
          $scope.caption=true;

     $scope.visibility="Visibility---";
        
          console.log($scope.weatherData);
        })
        .catch(function(error) {
          console.log(error);
        })
    }

  }
  angular.module("landing").controller("landingCtrl", ["$scope", "landingSvc", landingCtrl]);
})();
