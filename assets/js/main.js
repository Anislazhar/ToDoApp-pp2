// Declare variables and set their values from elements inside todolistpage.html
let exitBtn = document.getElementById("exit-btn");
let taskInput = document.getElementById("my-task");
let addTaskBtn = document.querySelector(".add-btn");
let myAllTasks = document.querySelector(".my-all-tasks");

// Add event listener for "load" event to auto-focus on the input(new task field) after page fully loads
window.addEventListener("load", function () {
  taskInput.focus();
});

// Add event listener for "click" event to redirect to "see you later" page when exit button is clicked
exitBtn.addEventListener("click", function () {
  window.open("seeyoulater.html", "_self");
});

// Create an empty array to store the new tasks
let theAllTasksArray = [];

// Check if local storage has tasks stored and set them to theAllTasksArray
if (window.localStorage.getItem("my-tasks")) {
  theAllTasksArray = JSON.parse(window.localStorage.getItem("my-tasks"));
}

// Call a function to get tasks from local storage
getTasksFromLS();

// Add event listener for "click" event to add a new task when add new task button is clicked
addTaskBtn.addEventListener("click", function () {
  if (taskInput.value === "") {
    alert("Please enter your task before clicking on 'Add Task' button.");
    taskInput.focus();
  } else if (taskInput.value.length > 70) {
    alert("You can only enter up to 70 characters.");
    taskInput.value = "";
    taskInput.focus();
  } else if (taskInput.value !== "" && taskInput.value.length < 71) {
    myNewTasks(taskInput.value);
    taskInput.value = "";
  }
});

// Add event listener for "keydown" event to handle Enter key press to add a new task
taskInput.addEventListener("keydown", function (enterKey) {
  if (enterKey.key === "Enter") {
    addTaskBtn.click();
  }
});

// Function to add a new task to theAllTasksArray
function myNewTasks(task) {
  let newTaskData = {
    id: Math.floor(Math.random() * 1e7),
    content: task,
  };
  if (newTaskData.content !== "") {
    theAllTasksArray.push(newTaskData);
  }
  showTasksOnPage(theAllTasksArray);
  addTasksToLS(theAllTasksArray);
}

// Function to display tasks on the page
function showTasksOnPage(tasks) {
  myAllTasks.innerHTML = "";
  tasks.forEach((taskData) => {
    let eachTaskDiv = document.createElement("div");
    eachTaskDiv.className = "the-new-task";
    eachTaskDiv.setAttribute("task-id", taskData.id);
    let taskTextContent = document.createTextNode(taskData.content);
    eachTaskDiv.appendChild(taskTextContent);

    let delBtn = document.createElement("input");
    delBtn.className = "del-btn";
    delBtn.setAttribute("type", "submit");
    delBtn.setAttribute("value", "Delete");
    eachTaskDiv.appendChild(delBtn);
    myAllTasks.appendChild(eachTaskDiv);

    taskInput.focus();
  });

  if (theAllTasksArray.length >= 2) {
    let clearAllBtn = document.createElement("input");
    clearAllBtn.classList = "clear-all-btn";
    clearAllBtn.setAttribute("type", "submit");
    clearAllBtn.setAttribute("value", "Clear All");
    myAllTasks.appendChild(clearAllBtn);

    clearAllBtn.addEventListener("click", function () {
      myAllTasks.innerHTML = "";
      window.localStorage.clear();
      theAllTasksArray = [];
      taskInput.focus();
    });
  }
}

// Function to add tasks to local storage
function addTasksToLS(tasks) {
  window.localStorage.setItem("my-tasks", JSON.stringify(tasks));
}

// Function to get tasks from local storage
function getTasksFromLS() {
  let myTasks = window.localStorage.getItem("my-tasks");
  if (myTasks) {
    let tasks = JSON.parse(myTasks);
    showTasksOnPage(tasks);
  }
}

// Event delegation to handle click event on delete button
myAllTasks.addEventListener("click", function (event) {
  if (event.target.classList.contains("del-btn")) {
    event.target.parentElement.remove();
    removeTaskFromLS(event.target.parentElement.getAttribute("task-id"));
    taskInput.focus();
  }
  if (
    theAllTasksArray.length <= 1 &&
    document.querySelector(".clear-all-btn")
  ) {
    document.querySelector(".clear-all-btn").style.display = "none";
  }
});

// Function to remove task from local storage
function removeTaskFromLS(taskId) {
  theAllTasksArray = theAllTasksArray.filter(function (taskData) {
    return taskData.id != taskId;
  });
  addTasksToLS(theAllTasksArray);
}
