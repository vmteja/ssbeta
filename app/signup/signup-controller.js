(function(){
    angular.module('ShieldSure')
.controller('SignupController', ['$scope', '$state', '$location', '$http', function($scope, $state, $location, $http){
        
        	$scope.submitForm = function(isValid) {

		// check to make sure the form is completely valid
		if (isValid) { 
			alert('Form Submitted');
            console.log($scope.newUser);
            $http.post('api/user/signup', $scope.newUser).success(function(response){
                $location.path('/home');
            
            }).error(function(error){
                console.log(error);
            })
		}

	};

    
    
    
    
        
        $scope.createUser = function(){
            console.log($scope.newUser);
            $http.post('api/user/signup', $scope.newUser).success(function(response){
            
            }).error(function(error){
                console.log(error);
            })
        }
    }]);
}());