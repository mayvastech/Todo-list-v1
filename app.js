// Grabbing html elements
const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

// Add a task
const addTask = function () {
  const taskText = todoInput.ariaValueMax.trim();
  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
  }
};
// Create new task items
const createTaskItem = function (taskText) {
  const taskItem = document.createElement("li");
  taskItem.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  
};
// Delete tasks
// Cross out tasks
// Event listeners
// Examples of pre-loaded tasks
