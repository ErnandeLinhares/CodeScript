angular.module("codeScript").directive("uiAlert", function(){
	
	return {
		templateUrl : "view/uiAlert.html",
		replace: true,
		restrict: "EA",
		scope:{
			title : "=",
			content: "="
		},
		transclude: true
	};
});