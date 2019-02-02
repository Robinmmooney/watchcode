function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodo();
}