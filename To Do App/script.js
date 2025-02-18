const addInput = document.getElementById("addItemInputField");
const addBtn = document.getElementById("addItemBtn");
const displayList = document.getElementById("toDoListUl");
const deleteBtn = document.getElementById("deleteAllBtn");
const tickBtn = document.getElementById("tickBtn");

function createTask(taskName) {
  const deleteButton = document.createElement("button");
  const newTask = document.createElement("li");
  const tickButton = document.createElement("button");
  const buttonDiv = document.createElement("div");

  newTask.textContent = taskName;
  tickButton.textContent = "✅";
  deleteButton.innerText = "❌";

  buttonDiv.appendChild(tickButton);
  buttonDiv.appendChild(deleteButton);

  newTask.appendChild(buttonDiv);
  displayList.appendChild(newTask);

  deleteButton.addEventListener("click", () => {
    newTask.remove();
  });

  deleteBtn.addEventListener("click", () => {
    displayList.removeChild(newTask);
  });

  tickButton.addEventListener("click", () => {
    newTask.style.textDecoration = "line-through";
  });
}

addBtn.addEventListener("click", () => {
  const task = addInput.value;

  if (task === "") {
    alert("Enter task name");
    addInput.value = "";
  } else {
    createTask(task);
    addInput.value = "";
  }
});

addInput.addEventListener("keydown", () => {
  const task = addInput.value;
  if (event.key === "Enter" && task !== "") {
    createTask(task);
    addInput.value = "";
    console.log("Enter");
  }
});
