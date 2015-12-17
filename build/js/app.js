var Portfolio=angular.module("Portfolio",["ngRoute","ngResource"]);Portfolio.run(function(){console.log("App is running!")}),Portfolio.config(["$routeProvider","$locationProvider",function(o,l){console.log("app loaded"),o.when("/",{templateUrl:"/views/home.html",controller:"HomeCtrl"}).when("/about",{templateUrl:"/views/about.html",controller:"AboutCtrl"}).when("/projects",{templateUrl:"/views/projects.html",controller:"ProjectCtrl"}).otherwise({templateUrl:"/views/404.html"})}]),Portfolio.controller("AboutCtrl",["$scope",function(o){console.log("AboutCtrl loaded!")}]),Portfolio.controller("HomeCtrl",["$scope",function(o){console.log("Home controller Loaded.")}]),Portfolio.controller("NavCtrl",["$scope",function(o){console.log("NavCtrl Loaded!"),o.projExpand=!1}]),Portfolio.controller("ProjectCtrl",["$scope",function(o){console.log("ProjectCtrl loaded!")}]);
//# sourceMappingURL=app.js.map
