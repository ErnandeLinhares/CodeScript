angular.module("codeScript")
.config(function($routeProvider){
	$routeProvider.when("/", { templateUrl: "view/home.html" })
	.when("/sobre", { templateUrl: "view/sobre.html" })
	.when("/contato", { templateUrl: "view/contato.html" })
	.when("/portifolio", { templateUrl: "view/portifolio.html" })
	.when("/blog", { templateUrl: "view/blog.html" })
	.otherwise({redirectTo:'/'});
});