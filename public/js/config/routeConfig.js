angular.module("codeScript")
.config(function($routeProvider){

	$routeProvider.when("/listaTelefonica", {
		templateUrl: "view/listaTelefonica.html"
	});

	$routeProvider.when("/directives", {
		templateUrl: "view/directives.html"
	});

	$routeProvider.when("/usuario", {
		templateUrl: "view/usuario.html"
	});

	$routeProvider.otherwise("/usuario");
	
});