angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings; 
   $scope.detailedInfo = undefined;
  

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
     
    $scope.addListing = function() {
      $scope.listings.push({
        'code' : $scope.code,
        'name' : $scope.name,
        'coordinates' : {
          'latitude' : $scope.latitude,
          'longitude' : $scope.longitude
        },
        'address' : $scope.address, 
      })
      $scope.code = ' ';
      $scope.name = ' '; 
      $scope.latitude = ' ';
      $scope.longitude = ' ';
      $scope.address = ' ';
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
   $scope.showDetails = function(index) {
        $scope.detailedInfo = "Code: " + $scope.listings[index].code + " Name: " + $scope.listings[index].name
         + " Coordinates: " + $scope.listings[index].coordinates.latitude + ", " + $scope.listings[index].coordinates.longitude + " Address: " + $scope.listings[index].address; 
    };
  }
]);