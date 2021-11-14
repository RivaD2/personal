// Credit to Dev Ed

// Grab selectors first
const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const taskList = document.querySelector('.task-list');

/*
Create event listeners
  - I need one for when the task button inside input is clicked
    - When button is clicked, new task item is created
  - I need one for when I remove a task once it is completed
    - When clicked, it will remove the div holding the task item
*/
taskButton.addEventListener('click', addNewTask);
taskList.addEventListener('click', removeTask);

// Functions
function addNewTask(event) {
  event.preventDefault();
  // Create div that will hold li and todo and done buttons
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  // Create new task item li
  const newTaskItem = document.createElement('li');
  newTaskItem.classList.add('new-task-item');
  // Grab input value
  newTaskItem.innerText = taskInput.value;

  // Add task-item to task div container
  taskDiv.appendChild(newTaskItem);

  // Create todo button
  // Instead of using icon, use text to indicate an item marked as todo
  const todoButton = document.createElement('button');
  todoButton.classList.add('todo-button');
  todoButton.innerHTML = '<div class="todo-text">TODO</div>';
  taskDiv.appendChild(todoButton);

  // Create done button
  // Append button to taskDiv
  // Clear out task input after task has been added
  const doneButton = document.createElement('button');
  doneButton.classList.add('done-button');
  doneButton.innerHTML = '<div class="done-text">DONE</div>';
  taskDiv.appendChild(doneButton);

  // Take entire taskDivContainer and append it to taskList
  taskList.appendChild(taskDiv);

  // Clear out taskInput value after new task added
  taskInput.value = '';
}

// Function to remove task
// I need to see what e.target is :)
// I have to go to parent element rather than individual button (which is div class="task")
function removeTask(event) {
  const targetButton = event.target;
  if (targetButton.classList[0] === 'done-button') {
    const itemToRemove = targetButton.parentElement;
    itemToRemove.remove();
  }
}
