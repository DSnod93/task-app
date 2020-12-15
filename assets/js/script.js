var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");



var createTaskHandler = function(event) {


    event.preventDefault();
    
    var listItemEl = document.createElement("li");      // create new item task
    listItemEl.className = "task-item";                 // style the new task item
    listItemEl.textContent = "This is a new task";      // add the text
    tasksToDoEl.appendChild(listItemEl);                // display element on task list

};

formEl.addEventListener("submit", createTaskHandler);

