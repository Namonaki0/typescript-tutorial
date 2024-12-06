const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const formList = document.querySelector<HTMLUListElement>('.list');


type Task = {
    description: string;
    isCompleted: Boolean;
}

const tasks: Task[] = [] = loadTasks();  

tasks.forEach(renderTask);

function loadTasks():Task[] {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = formInput?.value;

    if(inputValue) {
        const task: Task = {
            description: inputValue,
            isCompleted: false
        }
        // add task to list
        addTask(task);
        // render tasks
        renderTask(task);
        // update local storage
        updateStorage();
        formInput.value = '';
        return;
    }
    alert('Please, fill the input field');
});

function addTask(task:Task):void {
    tasks.push(task);
    console.log(tasks);
}

function renderTask(task:Task):void {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.description;

    // checkbox
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = Boolean(task.isCompleted);

    // toggle checkbox
    taskCheckbox.addEventListener('change', () => {
        task.isCompleted = !task.isCompleted;
        updateStorage();
    })

    taskElement.appendChild(taskCheckbox);
    formList?.appendChild(taskElement);
}

function updateStorage():void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}