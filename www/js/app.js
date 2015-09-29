angular.module('iRent', ['ngRoute', 'iRent.Controllers'])
.config(function($routeProvider) {
	console.log('inside app.js');
    $routeProvider.
      when('/', {
        //templateUrl: 'partials/login.html',
        //controller: 'userCtrl'
    	  templateUrl: 'partials/productList.html',
          controller: 'prodCtrl'
      }).
      when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'userCtrl'
      }).
      when('/home', {
        //templateUrl: 'partials/home.html',
        //controller: 'userCtrl'
    	  templateUrl: 'partials/productList.html',
          controller: 'prodCtrl'
      }).
      when('/product', {
          templateUrl: 'partials/productList.html',
          controller: 'prodCtrl'
        }).
        when('/product/:prodId', {
            templateUrl: 'partials/productDetail.html',
            controller: 'prodDetailCtrl'
          }).
      otherwise({
        redirectTo: '/'
      });
})
.run(['$rootScope', '$location', '$http', function ($rootScope, $location, $http) {

    // $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    //     // $rootScope.okSaveScroll = false;
    //     var currentUser = angular.fromJson(localStorageService.get("currentUser"));

    //     // sharedService.broadcastItem('routeChangeBroadCast');

    //     var redirectPath=$location.url();
    //     if (currentUser==null) {
    //         if(toState.url != '/')
    //             redirectPath = '/';
    //     }
    //     else {
    //         if(toState.url == '/')
    //            redirectPath = '/home'
    //     }
    //     // console.log('redirectPath', redirectPath);
    //     if(redirectPath != $location.url())
    //         $location.path(redirectPath);
    // });

    // $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){
    //     // console.log('fromState', $location.$$absUrl.split('#')[1]);
    //     if ($location.$$absUrl.split('#')[1] !== $rootScope.urlHistory[$rootScope.urlHistory.length - 1]) {
    //         $rootScope.urlHistory.push($location.$$absUrl.split('#')[1]);
    //     }
        
    //     setTimeout(function(){
    //         if($rootScope.direction!= 'page-back') {
    //             var el = angular.element(document.querySelectorAll('[ui-view]'));
    //             if(el) {
    //                 el.removeClass('page-back').addClass('page-forward');
    //             }
    //             $rootScope.$apply();
    //         }
    //         $rootScope.direction = 'page-forward';
    //     }, 1);
    // });
}]);
