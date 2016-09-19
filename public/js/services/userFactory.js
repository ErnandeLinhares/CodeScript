angular.module("codeScript")
.factory("userFactory", function($http, config){

	var _getUsers = function(){

		return $http.get(config.baseUrl+"/user");
	};

	var _createUser = function(user){

		return $http.post(config.baseUrl+"/user", user);
	};

	var _remove = function(user){

		return $http.delete(config.baseUrl+"/user/"+user._id);
	};

	return {
		getUsers : _getUsers,
		createUser: _createUser,
		remove: _remove
	};

});