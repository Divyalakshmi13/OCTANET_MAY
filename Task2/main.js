function addTask() {
  const taskInput = document.getElementById('taskInput').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;

  if (taskInput === '') {
    alert('Please enter a task title');
    return;
  }

  const taskStatusContainer = document.getElementById('taskStatusContainer');
  const taskStatusItem = document.createElement('div');
  taskStatusItem.classList.add('task-status-item');
  taskStatusItem.innerHTML = `
    <p>Title    : ${taskInput}</p>
    <p>Due Date : ${dueDate}</p>
    <p>Priority : ${priority}</p>
    <button onclick="completeTask(this)">Complete</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;
  taskStatusContainer.appendChild(taskStatusItem);
}

function completeTask(button) {
  const taskStatusItem = button.parentElement;
  taskStatusItem.style.textDecoration = 'line-through';
}

function deleteTask(button) {
  const taskStatusItem = button.parentElement;
  taskStatusItem.remove();
}
