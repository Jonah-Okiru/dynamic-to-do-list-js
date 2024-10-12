// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function(){
    // select dom elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    // load task from local storage on the page
    loadTasks();
    // Create the addTask Function
    function addTask(){
        let taskText = taskInput.value.trim();
        if(taskText===""){
            alert('Enter the task');
        }
        //Task creation and removal
        if(taskText!==""){
            // create new li element
            let new_li =document.createElement('li');
            // change the text content of the li element to tasktext
            new_li.textContent = taskText;
            // create new button element for removing task
            let new_button = document.createElement('BUTTON');
            // set its text content to remove
            new_button.textContent = 'Remove';
            // add the class to the button element
            new_button.classList.add('remove-btn');
            /* ssign an onclick event to the remove button that, when triggered,
             removes the li element from taskList*/
             new_button.addEventListener('click',function(){
                taskList.removeChild('li');
             });
             // Append the remove button to the li element, 
             new_li.appendChild(new_button);
             // then append the li to taskList.
             taskList.appendChild(new_li);
             // Clear the task input field by setting taskInput.value to an empty string.
             taskInput.value ="";
             // save task to local storage
             saveTaskToLocalStorage(taskText);

        }

    }
    // Add an event listener to addButton that calls addTask when the button is clicked.
    addButton.addEventListener('click',addTask());
    /*
    Add an event listener to taskInput for the 'keypress' 
    event to allow tasks to be added by pressing the “Enter” key. 
    Inside this event listener, check if event.key is equal to 'Enter'
     before calling addTask.
    */
   taskInput.addEventListener('keypress', function(){
    if(keypress.key ==='Enter'){
        addTask();
    }
   })
})
// Invoke the addTask function on DOMContentLoaded.
document.addEventListener('DOMContentLoaded', addTask());
// Function to load tasks from local storage
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) 
 {
        const tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            addTask(task); 

        });
    }
}

// Function to save a task to local storage
function saveTaskToLocalStorage(task) {
    const storedTasks = localStorage.getItem('tasks');
    let tasks = [];
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to remove a task from local storage
function removeTaskFromLocalStorage(task) 
 {
    const storedTasks = localStorage.getItem('tasks');
    let tasks = [];
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}