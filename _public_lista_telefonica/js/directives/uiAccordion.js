angular.module("codeScript")
.directive("uiAccordions", function(){
	return {
		controller: function($scope, $element, $attrs){
			var accordions = [];
			this.registerAccordion = function(accordion){
				accordions.push(accordion);
			};

			this.closeOthers = function(accordionEvent){
				accordions.forEach(function(accordion){
					if(accordion !== accordionEvent)
						accordion.isOpened = false;
				});
			};
		}
	};	
})
.directive("uiAccordion", function(){
	return {
		templateUrl : "view/uiAccordion.html",
		transclude: true,
		scope: {
			title: "="
		},
		require: "^uiAccordions",
		link: function(scope, element, attrs, ctrl){
			ctrl.registerAccordion(scope);
			scope.open = function(){
				ctrl.closeOthers(scope);
				scope.isOpened = !scope.isOpened;
			};
		}
	};
});
