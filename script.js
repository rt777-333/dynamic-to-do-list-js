// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // If the input is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Attach click event to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Allow adding task with "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // If the input is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');  // Using classList.add as required

        // Assign an onclick event to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Attach event listener to allow adding task with "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});



// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false);  // Load tasks without saving again
        });
    }

    // Function to save tasks array to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to retrieve tasks array from Local Storage
    function getStoredTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    // Function to add a new task
    function addTask(taskText = null, save = true) {
        // If taskText is not provided, get it from input field
        if (taskText === null) {
            taskText = taskInput.value.trim();
        }

        // If task is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Assign an onclick event to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(li);
            // Remove from Local Storage
            const tasks = getStoredTasks().filter(task => task !== taskText);
            saveTasks(tasks);
        };

        // Append remove button to list item
        li.appendChild(removeButton);

        // Append list item to task list
        taskList.appendChild(li);

        // If save flag is true, store task in Local Storage
        if (save) {
            const tasks = getStoredTasks();
            tasks.push(taskText);
            saveTasks(tasks);
        }

        // Clear input field
        taskInput.value = "";
    }

    // Attach event listener to Add Task button
    addButton.addEventListener('click', () => addTask());

    // Attach event listener to allow adding task with "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when the page loads
    loadTasks();
});



