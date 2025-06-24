const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.classList.add('task-item');

  const leftDiv = document.createElement('div');
  leftDiv.classList.add('task-left');

  const checkbox = document.createElement('span');
  checkbox.classList.add('checkbox');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('checked');
    li.classList.toggle('completed');
  });

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(taskSpan);

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');

  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(leftDiv);
  li.appendChild(removeBtn);

  taskList.appendChild(li);
  input.value = '';
});
