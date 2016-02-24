(function(){
    angular.module('ShieldSure')
.controller('ProductController', ['Upload','$scope', '$state','$location', '$http', function( Upload, $scope, $state, $location, $http){
        
        $scope.user = JSON.parse(localStorage['User-Data']) || undefined;
                                
                $scope.$watch(function(){
                    return $scope.file
                }, function (){
                   $scope.upload($scope.file); 
                });
         $scope.upload = function (file) {
                    if (file){
                        Upload.upload({
                            url: 'api/product/billPic',
                            method: 'POST',
                            data: {userId: $scope.user._id},
                            file: file
                        }).progress(function(evt){
                            console.log("firing");
                        }).success(function(data){
                            
                        }).error(function(error){
                            console.log(error);
                        })
                    }
                };
    $scope.submitForm = function(isValid) {

		// check to make sure the form is completely valid
		if (isValid) { 
			alert('Form Submitted!');
            console.log($scope.newProduct);
            $http.post('api/product/product', $scope.newProduct).success(function(response){
                $location.path('/index.html');
            
            }).error(function(error){
                console.log(error);
            })
		}

	};
        
    }]);
}());