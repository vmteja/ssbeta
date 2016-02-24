(function(){
    angular.module('ShieldSure', ['ui.router', 'ngFileUpload'])
            .config(function($stateProvider, $urlRouterProvider){
            
            $urlRouterProvider.otherwise('/');
        
            $stateProvider
                .state('signUp', {
                url: "/signup",
                templateUrl: "app/signup/signup.html",
                controller: "SignupController"
            })
                .state('editProfile', {
                url: "/edit-profile",
                templateUrl: "app/profile/edit-profile-view.html",
                controller: "EditProfileController"
            })
            .state('product', {
                url: "/products",
                templateUrl: "app/products/product.html",
                controller: "ProductController"
            })
            .state('home', {
                url: "/home",
                templateUrl: "app/home/home.html",
                controller: "HomeController"
               
            })
           
              
        })
}());