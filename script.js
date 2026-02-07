const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Add Task
addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Complete task on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = '×';
  delBtn.className = 'delete-btn';
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    taskList.removeChild(li);
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = '';
});

// Add task with Enter key
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addBtn.click();
});