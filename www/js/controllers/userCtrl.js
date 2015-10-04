angular
		.module('iRent.Controllers', [])
		// angular.module('iRent')
		.controller(
				'userCtrl',
				[
						'$scope',
						'$rootScope',
						'$http',
						function($scope, $rootScope, $http) {
							$http.get(
									iRentApp.serviceRoot
											+ '/iRentService/user/Alice')
									.success(function(data) {
										console.log('data&&&&&&&', data)
										$scope.user = data;
									});
						} ])
		.controller(
				'userRegisterCtrl',
				[
						'UserService',
						'$scope',
						'$rootScope',
						'$http',
						'FlashService',
						function(UserService, $scope, $rootScope, $http,
								FlashService) {
							// alert(1)
							$scope.error = false;
							$scope.errorMsg = '';
							$scope.submit = function() {

								var appUserName = $scope.user.username;
								var password = $scope.user.password;
								$scope.error = false;
								$scope.errorMsg = '';
								UserService
										.GetByUsername(appUserName)
										.then(
												function(result) {
													 //alert(result.messge)
													 alert(result)
													if (_.isUndefined(result) || _.isEmpty(result)) {

														// alert("error")
														UserService
																.Create(
																		$scope.user)
																.then(
																		function(
																				response) {
																			if (response.success) {
																				// FlashService.Success('Registration
																				// successful',
																				// true);
																				// $location.path('/login');
																				alert("success")
																			} else {
																				// FlashService.Error(response.message);
																				// vm.dataLoading
																				// =
																				// false;
																				alert("error")
																			}
																		})

													} else {
														// FlashService.Error(response.message);
														// vm.dataLoading =
														// false;
														alert("Already exits")
														result.message = 'User Name already exits. Please select a different user name'
														FlashService
																.Error(result.messge);
														$scope.error = true;
														$scope.errorMsg = 'User Name already exits. Please select a different user name'
													}
												});
							}
						} ]).controller(
				'userLoginCtrl',
				[ '$scope', '$rootScope', '$http', '$location',
						function($scope, $rootScope, $http, $location) {

							// var authenticate = function(credentials,
							// callback) {
							//
							// var headers = credentials ? {authorization :
							// "Basic "
							// + btoa(credentials.username + ":" +
							// credentials.password)
							// } : {};
							//
							// $http.get(iRentApp.serviceRoot +
							// '/iRentService/user', {headers :
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

						} ])
