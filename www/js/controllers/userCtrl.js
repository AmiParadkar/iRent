angular.module('iRent.Controllers', [])
// angular.module('iRent')
.controller('userCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
  // $scope.$on('setHeader', function() {
  // $scope.headerText = eventBroadcastService.message.header;
  // });
	// function Hello($scope, $http) {
	
	    $http.get(iRentApp.serviceRoot + '/iRentService/user/Alice').
	        success(function(data) {
	        	console.log('data&&&&&&&', data)
	            $scope.user = data;
	        });
	// }
	    
}])
.controller('userRegisterCtrl', ['UserService','$scope', '$rootScope', '$http','FlashService' ,function(UserService ,$scope, $rootScope, $http,FlashService){
	 alert(1)
	$scope.error = false;
	$scope.errorMsg = '';
	$scope.submit = function() {
		//if(checkRequired($scope.user) == true){
		
		var appUserName = $scope.user.username;
		var password = $scope.user.password;
		$scope.error = false;
		$scope.errorMsg = '';
		UserService.GetByUsername(appUserName)
			.then(function (result){
				//alert(result.succes)
				if (_.isUndefined(result)) {
					
					alert("error")
	            	UserService.Create($scope.user)
	                .then(function (response) {
	                    if (response.success) {
	                        // FlashService.Success('Registration successful',
							// true);
	                        // $location.path('/login');
	                    	alert("success")
	                    } else {
	                        // FlashService.Error(response.message);
	                        // vm.dataLoading = false;
	                    	alert("error")
	                    }
	                })
					
            }else {
                // FlashService.Error(response.message);
                // vm.dataLoading = false;
            	alert("Already exits")
				result.message = 'User Name already exits. Please select a different user name'
				FlashService.Error(result.messge);
				$scope.error = true;
				$scope.errorMsg = 'User Name already exits. Please select a different user name'
            }
        });
		/*}
		else
			{
				alert("Required field is missing")
			}*/
//		
// $http.get(iRentApp.serviceRoot + '/iRentService/user/'+appUserName).
// success(function(response) {
// console.log("=========="+iRentApp.serviceRoot +
// '/iRentService/user/'+appUserName)
// console.log('username = '+ response.userName)
// $scope.user = response;
// if($scope.user){
// $scope.error= true;
// $scope.errorMsg = "User name already exits. Please select a different
// username";
// }
// });
	
	

	}	    
}])
.controller('userLoginCtrl', ['$scope', '$rootScope', '$http','$location' ,function($scope, $rootScope, $http,$location){

// var authenticate = function(credentials, callback) {
//
// var headers = credentials ? {authorization : "Basic "
// + btoa(credentials.username + ":" + credentials.password)
// } : {};
//
// $http.get(iRentApp.serviceRoot + '/iRentService/user', {headers :
// headers}).success(function(data) {
// if (data.name) {
// $rootScope.authenticated = true;
// } else {
// $rootScope.authenticated = false;
// }
// callback && callback();
// }).error(function() {
// $rootScope.authenticated = false;
// callback && callback();
// });
//
// }
//
// authenticate();
// $scope.credentials = {};
// $scope.login = function() {
// authenticate($scope.credentials, function() {
// if ($rootScope.authenticated) {
// $location.path("/");
// $scope.error = false;
// } else {
// $location.path("/login");
// $scope.error = true;
// }
// });
// };

	    
}])
// .controller('prodCtrl', ['$scope', '$rootScope', '$http', function($scope,
// $rootScope, $http){
// $scope.serviceRoot = iRentApp.serviceRoot+"/";
// //$http.get(iRentApp.serviceRoot + '/iRentService/product/all').
// //$http.get(iRentApp.serviceRoot + '/iRentService/product/Prod1').
// //success(function(data) {
// console.log("=========="+$scope.serviceRoot)
// $http.get(iRentApp.serviceRoot + '/iRentService/product/all').
// success(function(response) {
// console.log("=========="+iRentApp.serviceRoot + '/iRentService/product/all')
// //console.log('prod Data -&', data)
// //$scope.prod = data;
// $scope.prods = response;
// console.log("prod size ="+response.length)
// })
// }])
// .controller('prodDetailCtrl', ['$scope', '$rootScope',
// '$http','$routeParams', function($scope, $rootScope, $http,$routeParams){
// $scope.serviceRoot = iRentApp.serviceRoot+"/";
// //alert("Inside detail ctrl")
// var id = $routeParams.prodId;
// //alert(id);
// $http.get(iRentApp.serviceRoot + '/iRentService/product/'+id).
// success(function(response) {
// console.log(response)
// //alert(response)
// $scope.prod = response;
// console.log("prod name ="+response.prodName)
// })
// }])
//$("usrRegisterForm")(function checkRequired(e) {
//	alert("Inside check Required")
//
//    var ref = $(this).find("[required]");
//
//    $(ref).each(function(){
//    	
//        if ( $(this).val() == '' )
//        {
//            alert("Required field should not be blank.");
//
//            $(this).focus();
//
//            e.preventDefault();
//            alert("returning false")
//            return false;
//        }
//        alert("returning true")
//    });  return true;
//});
