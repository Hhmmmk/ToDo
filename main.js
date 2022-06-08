window.addEventListener('load', () => {
  const form = document.querySelector('.newTask');
  const inputTask = document.querySelector('#inputTask');
  const taskList = document.querySelector('.tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = inputTask.value

    if (!task) {
      alert('No task Entered')
    }

    console.log(task);
  });
});