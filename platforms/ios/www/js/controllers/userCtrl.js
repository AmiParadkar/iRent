angular.module('iRent.Controllers', [])
.controller('userCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
  // $scope.$on('setHeader', function() {
  //     $scope.headerText = eventBroadcastService.message.header;
  // });
	//function Hello($scope, $http) {
	
	    $http.get(iRentApp.serviceRoot + '/iRentService/user/Alice').
	        success(function(data) {
	        	console.log('data&&&&&&&', data)
	            $scope.user = data;
	        });
	//}
	    
}])
.controller('prodCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
	$scope.serviceRoot = iRentApp.serviceRoot+"/";
    //$http.get(iRentApp.serviceRoot + '/iRentService/product/all').
	//$http.get(iRentApp.serviceRoot + '/iRentService/product/Prod1').
		//success(function(data) {
	console.log("=========="+$scope.serviceRoot)
	$http.get(iRentApp.serviceRoot + '/iRentService/product/all').
	        success(function(response) {
	        	console.log("=========="+iRentApp.serviceRoot + '/iRentService/product/all')
	        	//console.log('prod Data -&', data)
	            //$scope.prod = data;
	        	$scope.prods = response;
	        	console.log("prod size ="+response.length)
	        })
}])
.controller('prodDetailCtrl', ['$scope', '$rootScope', '$http','$routeParams', function($scope, $rootScope, $http,$routeParams){
	$scope.serviceRoot = iRentApp.serviceRoot+"/";
	//alert("Inside detail ctrl")
	var id = $routeParams.prodId;
	alert(id);
	$http.get(iRentApp.serviceRoot + '/iRentService/product/'+id).
	        success(function(response) {
	        	console.log(response)
	        	//alert(response)
	        	$scope.prod = response;
	        	console.log("prod name ="+response.prodName)
	        })
}])