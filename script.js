document.addEventListener('DOMContentLoaded', function() {
    // Select all necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    /**
     * Adds a new task to the to-do list
     */
    function addTask() {
        // Get and trim the task text from input
        const taskText = taskInput.value.trim();
        
        // Validate that the task isn't empty
        if (taskText === '') {
            alert('Please enter a valid task!');
            return;
        }

        // Create new list item for the task
        const taskItem = document.createElement('li');
        
        // Create span for task text
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        
        // Create remove button with proper class and event
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        // Assemble the task item
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(removeButton);
        
        // Add to the task list
        taskList.appendChild(taskItem);

        // Reset input field and focus it for next task
        taskInput.value = '';
        taskInput.focus();
    }

    // Add click event to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add keyboard event to input field (Enter key)
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});