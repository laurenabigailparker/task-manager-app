// step 1: create our tasks array
// an array [] holds a list of items.
// right now its empty. tasks get added later on.

let tasks = [ 
    {
        text: "clean room",
        category: "home",
        completed: false,
    },
    {
        text: "study javascript",
        category: "school",
        completed: false,
    },
];
//           ^^ empty array - like an empty to do list.


// =================================================================
// step 2: the addTask function
// This runs when the Add Task button is clicked
// =================================================================

function addTask() {

// get what the user typed in the input box
let input = document.getElementById("task-input");
let categoryInput = document.getElementById("category-input");
//                                ^ FIXED (matches HTML id)

// .value gets the text the user typed
let taskText = input.value;
let categoryText = categoryInput.value;

// Guard Clause: if the input is empty, do nothing
// .trim() removes extra spaces
if (taskText.trim() === "") {

alert("Please enter a task first!");
return; // stops the function here

}

//new task object
let newTask = {
    text: taskText,
    category: categoryText,
    completed: false,
};
// add the new task text to our tasks array
tasks.push(newTask);

// clear the input box
input.value = "";

// re-draw the task list on screen
renderTasks(); 

}


// =================================================================
// step 3: the renderTasks function
// draws the task list on screen
// =================================================================

function renderTasks() {

    // find the <ul> element in the html
    let list = document.getElementById("task-list");

    // clear whatever is in the list now
    list.innerHTML = "";

    // loop through every task in the array
    for (let i = 0; i < tasks.length; i++) {  

        // create a new <li>
        let li = document.createElement("li"); 
        li.className = "task-item"; 
        if (tasks[i].completed) {
            li.classList.add("completed");
        }
        // fill the <li> with task + buttons
        li.innerHTML =
'<div>' +
'<span class="task-text">' + tasks[i].text + '</span>' +
'<br>' +
'<span class="task-category">' + tasks[i].category + '</span>' +
'</div>' +
'<div class="task-actions">' +
'<button class="btn-done" onclick="completeTask(' + i + ')">Done</button>' +
'<button class="btn-delete" onclick="deleteTask(' + i + ')">Delete</button>' +
'</div>';

        // add this <li> to the list
        list.appendChild(li);

    }

    // if no tasks exist, show message
    if (tasks.length === 0) {
        list.innerHTML =
        '<li style="color:pink; font-size:13px; padding:12px 0; text-align:center;">No tasks yet. Add one above!</li>';
    }

    // update counter
    updateCount();

}


// =================================================================
// step 4: the updateCount function
// updates the "x tasks remaining" counter
// =================================================================

function updateCount() {

    let countEl = document.getElementById("task-count");

    countEl.textContent = tasks.length + " tasks remaining";

}


// =================================================================
// step 5: delete + complete functions (needed for buttons)
// =================================================================

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function completeTask(index) {
    tasks[index].completed = true;
    renderTasks();
}



