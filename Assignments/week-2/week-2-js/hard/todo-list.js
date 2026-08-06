/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(indexofTodo){
    this.todos.splice(indexofTodo, 1);
  }
  update(index, updatedTodo){
    this.todos[index] = updatedTodo;
  }
  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
    return this.todos[indexOfTodo];
  }
  clear(){
    this.todos = [];
  }
}

module.exports = Todo;
console.log("Testing the Todo class");
const todo = new Todo();
todo.add("Buy groceries");
todo.add("Clean the house");
console.log("Current todos:", todo.getAll()); 
