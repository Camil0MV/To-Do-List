document.addEventListener('DOMContentLoaded', function() {
  const tasksContainer = document.getElementById('tasks-container');
  const addTaskButton = document.getElementById('add-task');

  addTaskButton.addEventListener('click', function () {
      const newTask = document.createElement('div');
      newTask.classList.add('added-task');

      const deleteButton = document.createElement('button');
      deleteButton.type = 'button';
      deleteButton.classList.add('delete-task');
      deleteButton.textContent = '-';

      const taskLabel = document.createElement('label');
      taskLabel.classList.add('task');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      const checkmark = document.createElement('span');
      checkmark.classList.add('checkmark');

      const textInput = document.createElement('input');
      textInput.type = 'text';
      textInput.classList.add('inputs-task');
      textInput.placeholder = '...';

      taskLabel.appendChild(checkbox);
      taskLabel.appendChild(checkmark);
      taskLabel.appendChild(textInput);

      newTask.appendChild(deleteButton);
      newTask.appendChild(taskLabel);

      tasksContainer.appendChild(newTask);

      deleteButton.addEventListener('click', function () {
          tasksContainer.removeChild(newTask);
      });
  });
  });