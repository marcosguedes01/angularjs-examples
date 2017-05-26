angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.errorMessage = "";

    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}
      ];

    todoList.addTodo = function() {      
      if (todoList.todoText!=undefined && todoList.todoText.trim().length>0)
      {
        todoList.todos.push({text:todoList.todoText, done:false});
        todoList.todoText = '';
      }
      else
      {
        todoList.errorMessage = "Field can not be empty";
      }
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
});