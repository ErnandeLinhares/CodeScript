angular.module("codeScript")
.controller("userCtrl", function($scope, userFactory, stringGenerator){
	
	$scope.usuarios = [];
	
	var carregarUsuarios = function(){
		
		userFactory.getUsers().success(function(data){
			$scope.usuarios = data;
			$scope.stringRandom = stringGenerator.generate();
		}).error(function(data){
			console.log(data);
		});
	};

	carregarUsuarios();

	$scope.removeUser = function(user){
		
		userFactory.remove(user).success(function(data){
			$scope.usuarios = $scope.usuarios.filter(function(el){
				if(el._id !== user._id) return el;
			});
		}).error(function(data){
			console.log(data);
		});
	};

	$scope.inserirUsuario = function(user){
		
		userFactory.createUser(user).success(function(data){
			$scope.usuarios.push(angular.copy(data));
			delete $scope.user;
			
		}).error(function(data){
			console.log(data);
		});
	};

});