(function () {
    'use strict';
 
    angular
        .module('iRent')
        .factory('UserService', UserService);
 
    UserService.$inject = ['$http','$timeout', '$filter', '$q'];
    function UserService($http,$timeout, $filter, $q) {
        var service = {};
        var userUrl = iRentApp.serviceRoot +'/iRentService/user/';
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
 
        return service;
 
        function GetAll() {
            return $http.get(userUrl+'all').then(handleSuccess, handleError('Error getting all users'));
        }
 
        function GetById(id) {
            return $http.get(userUrl + id).then(handleSuccess, handleError('Error getting user by id'));
        }
 
        function GetByUsername(username) {
        	console.log("url = "+userUrl+username)
        	return $http.get(userUrl + username).then(handleSuccess, handleError('Error getting user by username'));
        }
 
        function Create(user) {
        	console.log("url = "+userUrl+'create')
            return $http.post(userUrl + 'create', user).then(handleSuccess, handleError('Error creating user'));
        }
 
        function Update(user) {
            return $http.put(userUrl + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }
 
        function Delete(id) {
            return $http,delete(userUrl + id).then(handleSuccess, handleError('Error deleting user'));
        }
 
        // private functions
 
        function handleSuccess(res) {
        	alert("Inside handleSuccess")
            return res.data;
        }
 
        function handleError(error) {
            return function () {
            	alert("Inside handeError")
                return { success: false, message: error };
            };
        }
    }
 
})();