(function(){
    angular.module('ShieldSure')
    .controller('NavigationController', ['$scope', '$http','$location', "$state", function($scope, $http, $location, $state){
        if (localStorage['User-Data']){
            $scope.loggedIn = true;
        } else {
            $scope.loggedIn = false;
        }
        
        
        $scope.logUserIn = function(){
            $http.post('api/user/login', $scope.login).success(function(response){
               localStorage.setItem('User-Data', JSON.stringify(response));
               $scope.loggedIn = true;
                $location.path('/home');
            }).error(function(error){
                console.error(error);
            });
        };
        
        $scope.logOut = function () {
            localStorage.clear();
            $scope.loggedIn = false;
               $location.path('/');
                        

        }
    }]);
}());