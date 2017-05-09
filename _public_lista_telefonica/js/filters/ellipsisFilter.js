angular.module("codeScript")
.filter("ellipsis",function(){

	return function(input, limit, end) {
		if(input.length < limit) return input;
		return input.substring(0, (limit || 3)) + (end ? end : "...");
	};
});