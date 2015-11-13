var app = angular.module('todoApp', []); // What's missing? Hint, it's more than one thing.

app.controller("todosController", function($scope) { // What's missing?
	$scope.todos = {}; // Store todo items here. What is the data type?
	$scope.addTodo = function(task) { 
    $scope.todos.push({todo:task.text});
    $scope.todos.task = "";
	};
	$scope.deleteAll = function() { // Rewrite to make this function available in your view
		$scope.todos = {};
	};
});