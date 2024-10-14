// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function(){
    // select dom elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    // load task from local storage on the page
    //loadTasks();
    
    // Create the addTask Function
    function addTask(){
        const taskText = taskInput.value.trim();
        if(taskText===""){
            alert('Enter the task');
            return;
        }
        // create new li element
        const new_li =document.createElement('li');
        // change the text content of the li element to tasktext
        new_li.textContent = taskText;
        // create new button element for removing task
        const new_button = document.createElement('button');
        // set its text content to remove
        new_button.textContent = 'Remove';
        // add the class to the button element
        new_button.classList.add('remove-btn');
        /* ssign an onclick event to the remove button that, when triggered,
        removes the li element from taskList*/
        new_button.addEventListener('click',function(){
           taskList.removeChild(new_li);
        });
        // Append the remove button to the new_li element, 
        new_li.appendChild(new_button);
        // then append the li to taskList.
        taskList.appendChild(new_li);
        // Clear the task input field by setting taskInput.value to an empty string.
        taskInput.value = "";
        // save task to local storage
        //saveTaskToLocalStorage(taskText);


    }
    // Add an event listener to addButton that calls addTask when the button is clicked.
    addButton.addEventListener('click',addTask);
    /*
    Add an event listener to taskInput for the 'keypress' 
    event to allow tasks to be added by pressing the “Enter” key. 
    Inside this event listener, check if event.key is equal to 'Enter'
     before calling addTask.
    */
   taskInput.addEventListener('keypress', 
    function(event){
        if(event.key ==='Enter'){
            addTask();
        }
    });
   addTask(); // add initial task to demostrate functionality
});
// Invoke the addTask function on DOMContentLoaded.
document.addEventListener('DOMContentLoaded', addTask());
// Function to load tasks from local storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }
  
  // Function to save tasks to local storage
  function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
  
  // Function   to remove tasks from local storage
  function removeTaskFromLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));   
  
  }