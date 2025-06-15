document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks when page loads
    loadTasks();

    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (!taskText) {
            alert('Please enter a valid task!');
            return;
        }

        // Add to Local Storage
        const tasks = getTasks();
        tasks.push(taskText);
        saveTasks(tasks);

        // Create task element
        createTaskElement(taskText);

        // Clear input
        taskInput.value = '';
        taskInput.focus();
    }

    // Create task element
    function createTaskElement(taskText) {
        const taskItem = document.createElement('li');
        
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', function() {
            // Remove from DOM
            taskItem.remove();
            // Remove from Local Storage
            const tasks = getTasks().filter(task => task !== taskText);
            saveTasks(tasks);
        });

        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    }

    // Load tasks from Local Storage
    function loadTasks() {
        const tasks = getTasks();
        tasks.forEach(task => createTaskElement(task));
    }

    // Helper function to get tasks from Local Storage
    function getTasks() {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    }

    // Helper function to save tasks to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Event Listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTask();
    });
});