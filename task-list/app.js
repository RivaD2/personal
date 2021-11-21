// Refactored Dev Ed tutorial to use Class for Todos instead
class Task {
  constructor(item) {
    this.item = item
  }

  renderItemContainer() {
    // Create div that will hold li and todo and done buttons
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    taskDiv.append(this.generateTask(this.item));
    // Saving todo button code, commented out the call for now
    // taskDiv.append(this.generateTaskButton(taskDiv));
    taskDiv.append(this.generateRemoveTaskButton(taskDiv));
    return taskDiv;
  }

  generateTask() {
    const newTaskItem = document.createElement('div');
    newTaskItem.classList.add('new-task-item');

    // Grab input value
    newTaskItem.innerText = this.item;
    return newTaskItem;
  }

  generateRemoveTaskButton(newTaskItem) {
    // Create done button
    // Append button to taskDiv
    const doneButton = document.createElement('button');
    doneButton.classList.add('done-button');
    doneButton.classList.add('task-button');

    const taskDiv = document.createElement('div');

    doneButton.innerHTML = '<div class="done-text">DONE</div>';
    taskDiv.appendChild(doneButton);
    doneButton.onclick =  () => newTaskItem.remove();
    return doneButton;
  }

  generateTaskButton() {
    // Create todo button
    // Instead of using icon, use text to indicate an item marked as todo
    const todoButton = document.createElement('button');
    todoButton.classList.add('todo-button');
    todoButton.classList.add('task-button');

    const taskDiv = document.createElement('div');

    todoButton.innerHTML = '<div class="todo-text">TODO</div>';
    taskDiv.appendChild(todoButton);
    return todoButton;
  }
}

// Grab selectors first
const taskInput = document.querySelector('.task-input');
const taskForm = document.querySelector('.task-form');
const taskInputButton = document.querySelector('.task-input-button');
const taskList = document.querySelector('.task-list');

// Event Listener add New Task
taskInputButton.addEventListener('click', addNewTask);

// Adds new Task
function addNewTask(event) {
  event.preventDefault();
  const [item] = [...taskForm.elements];

  if(item.value === '') {
    return;
  }
  const newTask = new Task(item.value);

  taskList.appendChild(newTask.renderItemContainer());
  // Clear out taskInput value after new task added
  taskInput.value = '';
}


