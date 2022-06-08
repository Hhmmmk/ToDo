window.addEventListener('load', () => {
  const form = document.querySelector('.newTask');
  const inputTask = document.querySelector('#inputTask');
  const taskList = document.querySelector('.tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = inputTask.value;

    if (!task) {
      alert('No task Entered');
      return
    }

    const newTask = document.createElement('div');
    newTask.classList.add('task');

    taskList.appendChild(newTask);

    const newContent = document.createElement('div');
    newContent.classList.add('taskContent');

    newTask.appendChild(newContent);

    const newText = document.createElement('input');
    newText.classList.add('text');
    newText.type = 'text';
    newText.setAttribute('readonly', 'readonly');
    newText.value = task;

    newContent.appendChild(newText);

    const taskActions = document.createElement('div');
    taskActions.classList.add('taskActions');

    newTask.appendChild(taskActions);

    const edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML = 'Edit';

    taskActions.appendChild(edit);

    const del = document.createElement('button');
    del.classList.add('delete');
    del.innerHTML = 'Delete';

    taskActions.appendChild(del);


    edit.addEventListener('click', () => {
      if (edit.innerHTML.toUpperCase() == 'EDIT') {
        newText.removeAttribute('readonly', 'readonly');
        edit.innerHTML = 'Save';
        newText.focus();
      }
      else {
        newText.setAttribute('readonly', 'readonly');
        edit.innerHTML = 'Edit';
      }
    });

    del.addEventListener('click', () => {
      taskList.removeChild(newTask);
    });

    inputTask.value = "";
  });
});